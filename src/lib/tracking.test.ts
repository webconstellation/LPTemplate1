import { getFormTrackingData } from './tracking';

console.log('=== TRACKING TESTS ===\n');

console.log('Test 1: Direct Traffic (no referrer, no UTM)');
localStorage.clear();
sessionStorage.clear();
Object.defineProperty(document, 'referrer', { value: '', configurable: true });
Object.defineProperty(window, 'location', {
  value: { href: 'https://example.com/', search: '' },
  configurable: true
});
const data1 = getFormTrackingData();
console.log('Result:', { source: data1.source, medium: data1.medium });
console.log('Expected: source=direct, medium=none');
console.log('Pass:', data1.source === 'direct' && data1.medium === 'none' ? '✓' : '✗');
console.log('');

console.log('Test 2: Google Organic Search (referrer from Google)');
localStorage.clear();
sessionStorage.clear();
Object.defineProperty(document, 'referrer', {
  value: 'https://www.google.com/search?q=immigration+lawyer',
  configurable: true
});
const data2 = getFormTrackingData();
console.log('Result:', { source: data2.source, medium: data2.medium, term: data2.term });
console.log('Expected: source=google, medium=organic, term=immigration+lawyer');
console.log('Pass:', data2.source === 'google' && data2.medium === 'organic' ? '✓' : '✗');
console.log('');

console.log('Test 3: Facebook Social Traffic');
localStorage.clear();
sessionStorage.clear();
Object.defineProperty(document, 'referrer', {
  value: 'https://www.facebook.com/',
  configurable: true
});
const data3 = getFormTrackingData();
console.log('Result:', { source: data3.source, medium: data3.medium });
console.log('Expected: source=facebook, medium=social');
console.log('Pass:', data3.source === 'facebook' && data3.medium === 'social' ? '✓' : '✗');
console.log('');

console.log('Test 4: UTM Parameters Override Referrer');
localStorage.clear();
sessionStorage.clear();
Object.defineProperty(document, 'referrer', {
  value: 'https://www.google.com/',
  configurable: true
});
Object.defineProperty(window, 'location', {
  value: {
    href: 'https://example.com/?utm_source=newsletter&utm_medium=email&utm_campaign=spring2024',
    search: '?utm_source=newsletter&utm_medium=email&utm_campaign=spring2024'
  },
  configurable: true
});
const data4 = getFormTrackingData();
console.log('Result:', { source: data4.source, medium: data4.medium, campaign: data4.campaign });
console.log('Expected: source=newsletter, medium=email, campaign=spring2024');
console.log('Pass:', data4.source === 'newsletter' && data4.medium === 'email' && data4.campaign === 'spring2024' ? '✓' : '✗');
console.log('');

console.log('Test 5: External Website Referral');
localStorage.clear();
sessionStorage.clear();
Object.defineProperty(document, 'referrer', {
  value: 'https://www.somewebsite.com/article',
  configurable: true
});
Object.defineProperty(window, 'location', {
  value: { href: 'https://example.com/', search: '' },
  configurable: true
});
const data5 = getFormTrackingData();
console.log('Result:', { source: data5.source, medium: data5.medium });
console.log('Expected: source=somewebsite.com, medium=referral');
console.log('Pass:', data5.source === 'somewebsite.com' && data5.medium === 'referral' ? '✓' : '✗');
console.log('');

console.log('Test 6: Verify NO direct/organic combination occurs');
console.log('Checking all test results...');
const allTests = [data1, data2, data3, data4, data5];
const hasDirectOrganic = allTests.some(d => d.source === 'direct' && d.medium === 'organic');
console.log('Result: direct/organic found?', hasDirectOrganic);
console.log('Expected: false (no direct/organic combinations)');
console.log('Pass:', !hasDirectOrganic ? '✓' : '✗');
console.log('');

console.log('=== ALL TESTS COMPLETE ===');
