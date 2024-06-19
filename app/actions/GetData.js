// app/actions/GetData.js
import { createClient } from '@supabase/supabase-js'; // Adjust based on your Supabase client import
import { getSession } from '@/lib/session'; // Adjust based on your session management setup

export async function GetData() {
  const session = await getSession();

  if (!session) {
    return { session: null, tasks: [] };
  }

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);
  const { data: tasks, error } = await supabase
    .from('task')
    .select('*')
    .eq('user_id', session.user.id) // Adjust 'user_id' based on your schema
    .order('date_created', { ascending: true });

  if (error) {
    console.error('Error loading tasks:', error.message);
    return { session, tasks: [] };
  }

  return { session, tasks };
}
