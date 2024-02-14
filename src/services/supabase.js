import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hecmegeipkgwbrkvsbjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlY21lZ2VpcGtnd2Jya3ZzYmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NzUyMjMsImV4cCI6MjAyMDU1MTIyM30.cyPtcX75dy0LaiaJEtvdyS-s4aPSgEjYr_4H7M8QmGs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
