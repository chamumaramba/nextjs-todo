// app/api/get-data/route.js
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return new Response(JSON.stringify({ session: null, task: [] }), { status: 200 });
  }

  const user = session.user;
  const { data: task, error } = await supabase
    .from('task')
    .select('*')
    .eq('user_id', user.id)
    .order('date_created', { ascending: true });

  if (error) {
    console.error('Error loading tasks:', error);
    return new Response(JSON.stringify({ session, task: [] }), { status: 500 });
  }

  return new Response(JSON.stringify({ session, task }), { status: 200 });
}
