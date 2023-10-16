import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://guvgamoyzdefhlrngzww.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dmdhbW95emRlZmhscm5nend3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODc4NjYsImV4cCI6MjAxMjk2Mzg2Nn0.2UYZSHfBGqsGcPUWaRVDfTqb2kq69dmeCzXjK-ISRvI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
