
import {Auth} from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm(){
    const supabase = createClientComponentClient();
    return(
        <Auth 
        supabaseClient={supabase}
        view="magic_link"
        showLinks={false}
        providers={[]}
        redirectTo='https://nextjs-todo-bez1s189a-chamumarambas-projects.vercel.app/auth/confirm'
        appearance={{
            theme: 'light',
            Button: {
                
                className: 'bg-blue-300 text-white-400 hover:bg-white-800 border-color-gray-200'
  
            },
            input: {
                className: 'bg-blue-800 border-black-200 text-black opacity-60 '

            }
        }}/>
    )
}