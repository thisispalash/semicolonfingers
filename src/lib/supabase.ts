import { createClient } from '@supabase/supabase-js';

// These should be in your .env.local file
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client for browser usage (public)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for server-side operations (protected)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// User signup function
export async function signUpUser(email: string, name: string, interested_in: number) {
  try {


    const { error } = await supabaseAdmin
      .from('signup')
      .insert({
        email,
        name,
        interested_in
      });

    if (error) throw error;

    return { success: true, error: undefined };
  } catch (error) {
    console.error('Error signing up user:', error);
    return { success: false, error };
  }
}
