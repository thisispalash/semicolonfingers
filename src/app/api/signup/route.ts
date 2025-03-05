import { NextRequest, NextResponse } from 'next/server';

import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const { email, name, interested_in } = await request.json();
  console.log(email, name, interested_in);

  const { error } = await supabaseAdmin
    .from('semicolon_interest')
    .insert({ email, name, interested_in });
  
  if (error) {
    return NextResponse.json({ message: 'Signup failed' }, { status: 500 });
  }
  return NextResponse.json({ message: 'Signup successful' });
}