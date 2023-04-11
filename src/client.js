import { createClient } from '@supabase/supabase-js'

const URL = 'https://ufbqztlsuufzmofckffi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmYnF6dGxzdXVmem1vZmNrZmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNzU5MzksImV4cCI6MTk5NjY1MTkzOX0.OaqoEWLqi5X5_McT1LYLFJ3FiXhS-id5YGBve9MBdGU';

export const supabase = createClient(URL, API_KEY);

