'use server';

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";
import { cookies } from 'next/headers';

export async function addTask(formData) {
  const task = formData.get('task');
  const due_date = formData.get('due_date');

  // Get the session using the getSession function from lib
  const session = await getSession();

  const user = session?.user;
  console.log('Form Data: ', formData);
  console.log('session', session);
  console.log('user: ', user);

  if (!user) {
    console.error('Unauthorized access');
    return { error: 'Unauthorized access' };
  }

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from('task')
    .insert({ task, due_date, user_id: user.id })
    .select(); // return the inserted row

  if (error) {
    console.error('Error adding task', error);
    return { error: 'Error adding task' };
  }

  if (!data || data.length === 0) {
    console.error('No data returned from the insert operation');
    return { error: 'No data returned from the insert operation' };
  }

  revalidatePath('/profile');

  return { message: 'Task added successfully', task: data[0] };
}
