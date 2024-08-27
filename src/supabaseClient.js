import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://eyqaluuxrphbxxfwjkxx.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cWFsdXV4cnBoYnh4Zndqa3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MzcxOTIsImV4cCI6MjA0MDMxMzE5Mn0.hilrvqBXJO3NjHlaHF0sHm5jgg7yaLDXTGwIuGFki4c'; // Replace with your Supabase Key

export const supabase = createClient(supabaseUrl, supabaseKey);
