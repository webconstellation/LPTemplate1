const STORAGE_KEY = 'lead_tracking_data';
const SESSION_KEY = 'lead_session_id';

export interface TrackingData {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  referrer: string;
  landingPage: string;
  firstTouchTimestamp: string;
  sessionId: string;
}

interface SearchEngine {
  name: string;
  domains: string[];
  param?: string;
}

const SEARCH_ENGINES: SearchEngine[] = [
  { name: 'google', domains: ['google.com', 'google.co.uk', 'google.ca', 'google.com.au'], param: 'q' },
  { name: 'bing', domains: ['bing.com'], param: 'q' },
  { name: 'yahoo', domains: ['yahoo.com', 'search.yahoo.com'], param: 'p' },
  { name: 'duckduckgo', domains: ['duckduckgo.com'], param: 'q' },
  { name: 'baidu', domains: ['baidu.com'], param: 'wd' },
  { name: 'yandex', domains: ['yandex.com', 'yandex.ru'], param: 'text' },
];

const SOCIAL_MEDIA: { [key: string]: string } = {
  'facebook.com': 'facebook',
  'fb.com': 'facebook',
  'twitter.com': 'twitter',
  'x.com': 'twitter',
  't.co': 'twitter',
  'linkedin.com': 'linkedin',
  'instagram.com': 'instagram',
  'pinterest.com': 'pinterest',
  'reddit.com': 'reddit',
  'tiktok.com': 'tiktok',
  'youtube.com': 'youtube',
};

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return '';
  }
}

function isInternalReferrer(referrerUrl: string): boolean {
  if (!referrerUrl) return true;

  const referrerDomain = extractDomain(referrerUrl);
  const currentDomain = window.location.hostname.replace('www.', '');

  return referrerDomain === currentDomain || referrerDomain === '' || referrerDomain === 'localhost';
}

function analyzeReferrer(referrerUrl: string): { source: string; medium: string; term?: string } {
  if (!referrerUrl || isInternalReferrer(referrerUrl)) {
    return { source: 'direct', medium: 'none' };
  }

  const domain = extractDomain(referrerUrl);

  for (const engine of SEARCH_ENGINES) {
    if (engine.domains.some(d => domain.includes(d))) {
      let term = '';
      if (engine.param) {
        try {
          const url = new URL(referrerUrl);
          term = url.searchParams.get(engine.param) || '';
        } catch {
          term = '';
        }
      }
      return { source: engine.name, medium: 'organic', term };
    }
  }

  for (const [socialDomain, socialName] of Object.entries(SOCIAL_MEDIA)) {
    if (domain.includes(socialDomain)) {
      return { source: socialName, medium: 'social' };
    }
  }

  return { source: domain, medium: 'referral' };
}

function getUTMParameters(): Partial<TrackingData> {
  const urlParams = new URLSearchParams(window.location.search);

  return {
    source: urlParams.get('utm_source') || urlParams.get('source') || '',
    medium: urlParams.get('utm_medium') || urlParams.get('medium') || '',
    campaign: urlParams.get('utm_campaign') || urlParams.get('campaign') || '',
    term: urlParams.get('utm_term') || urlParams.get('term') || '',
    content: urlParams.get('utm_content') || urlParams.get('content') || '',
  };
}

export function initializeTracking(): void {
  const existingData = localStorage.getItem(STORAGE_KEY);

  if (existingData) {
    return;
  }

  const urlParams = getUTMParameters();
  const referrer = document.referrer;
  const referrerAnalysis = analyzeReferrer(referrer);

  let source = urlParams.source || referrerAnalysis.source;
  let medium = urlParams.medium || referrerAnalysis.medium;
  let term = urlParams.term || referrerAnalysis.term || '';

  if (!urlParams.source && !urlParams.medium && !referrer) {
    source = 'direct';
    medium = 'none';
  }

  const trackingData: TrackingData = {
    source,
    medium,
    campaign: urlParams.campaign || '',
    term,
    content: urlParams.content || '',
    referrer: referrer || 'direct',
    landingPage: window.location.href,
    firstTouchTimestamp: new Date().toISOString(),
    sessionId: getOrCreateSessionId(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trackingData));
}

export function getTrackingData(): TrackingData {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  initializeTracking();

  const newStored = localStorage.getItem(STORAGE_KEY);
  if (newStored) {
    return JSON.parse(newStored);
  }

  return {
    source: 'direct',
    medium: 'none',
    campaign: '',
    term: '',
    content: '',
    referrer: 'direct',
    landingPage: window.location.href,
    firstTouchTimestamp: new Date().toISOString(),
    sessionId: getOrCreateSessionId(),
  };
}

export function getFormTrackingData() {
  const trackingData = getTrackingData();

  return {
    source: trackingData.source,
    medium: trackingData.medium,
    campaign: trackingData.campaign,
    term: trackingData.term,
    content: trackingData.content,
    referrer: trackingData.referrer,
    landing_page: trackingData.landingPage,
    submission_page: window.location.href,
    user_agent: navigator.userAgent,
    session_id: trackingData.sessionId,
    first_touch_timestamp: trackingData.firstTouchTimestamp,
    submission_timestamp: new Date().toISOString(),
  };
}

export function clearTrackingData(): void {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}
