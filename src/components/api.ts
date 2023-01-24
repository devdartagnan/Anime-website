import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://blgciguaqtqtubjofbfy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZ2NpZ3VhcXRxdHViam9mYmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzNTc5MjEsImV4cCI6MTk4NzkzMzkyMX0.xzQBc-i_R_aKgMIvwCkYzTiuXYirlrDvW9oZ0GbI91M')

const { data, error } = await supabase
    .from('anime')
    .select('*')

export default data