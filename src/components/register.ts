import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://blgciguaqtqtubjofbfy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZ2NpZ3VhcXRxdHViam9mYmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzNTc5MjEsImV4cCI6MTk4NzkzMzkyMX0.xzQBc-i_R_aKgMIvwCkYzTiuXYirlrDvW9oZ0GbI91M')

const inputEmail = document.querySelector('.email-input') as HTMLInputElement
const inputSenha = document.querySelector('.senha-input') as HTMLInputElement
const form = document.querySelector('#formRegister') as HTMLFormElement

let { data, error } = await supabase.auth.signInWithPassword({
    email: inputEmail.value,
    password: inputSenha.value
})

form?.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(error)
    console.log(data);
})
