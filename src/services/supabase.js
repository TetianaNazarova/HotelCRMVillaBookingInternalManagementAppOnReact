import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sdagutwjqkbrhxlwzafg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYWd1dHdqcWticmh4bHd6YWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODE3MTMsImV4cCI6MjA2Mzg1NzcxM30.OCgKXU9VTZEymThlF2vdG3BVDLfd6GxPZzyxCtPX8lM";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
