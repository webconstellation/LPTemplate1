import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadSubmission {
  full_name: string;
  email: string;
  phone: string;
  case_summary: string;
  form_type: string;
  form_source: string;
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  referrer: string;
  landing_page: string;
  submission_page: string;
  user_agent: string;
  session_id: string;
  first_touch_timestamp: string;
  submission_timestamp: string;
}

export async function submitLead(data: LeadSubmission) {
  const { data: result, error } = await supabase
    .from('lead_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error submitting lead to Supabase:', error);
    throw error;
  }

  return result;
}
