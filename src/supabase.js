import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabaseUrl);
console.log("hello");
export default supabase;
