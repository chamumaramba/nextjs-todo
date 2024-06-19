'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { getSession } from "@/lib/session"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export async function deleteTask(formData){
    const taskId = formData.get('id');
    
    const session = await getSession();

    if (!session) {
        console.error('Unauthorized access');
        return;
    }

    const user = session.user;

    if (!user) {
        console.error('Unauthorized access');
        return;
    }

    const supabase = createServerComponentClient({ cookies: () => cookies() });

    const { error } = await supabase
        .from('task')
        .delete()
        .match({ id: taskId, user_id: user.id });
        
        

    if (error) {
        console.error('Error deleting data', error);
        return;
    }

    revalidatePath('/profile');

    return { message: 'Task deleted' };
}
