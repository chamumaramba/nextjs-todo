'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { getSession } from "@/lib/session"

export async function updateTask(formData) {
  const id = formData.id;
  const task = formData.task;
  const due_date = formData.due_date;
  const session = await getSession();
  const user = session?.user

  const supabase = createServerComponentClient({ cookies })

  console.log('Form Data: ', formData)
  console.log('session', session)
  console.log('user: ', user)
  if (!user) {
    console.error('Unauthorized access');
    return;
  }

  const { data, error } = await supabase
      .from('task')
      .update({ task, due_date })
      .eq('id', id)
      .eq('user_id', user.id)
      .select();
 
  if (error) {
    console.log('Error: ', error)
    console.error('Error updating data', error);
  }



  revalidatePath('/profile');

  return { message: 'Update Successful', task: data[0]};
}

