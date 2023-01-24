const navIcon = document.querySelector('#navIcon') as HTMLButtonElement
const navbarMobile = document.querySelector('.navbar')

const searchIcon = document.querySelector('#searchIcon') as HTMLButtonElement
const searchBarMobile = document.querySelector('.nav-search')

// const loginBtn = document.querySelector('.login-btn') as HTMLButtonElement
// const registerBtn = document.querySelector('.register-btn') as HTMLButtonElement

navIcon.addEventListener('click', (e) => {
    e.preventDefault()
    navbarMobile?.classList.contains('none') ? navbarMobile?.classList.remove('none') : navbarMobile?.classList.add('none')
    navbarMobile?.classList.contains('none') ? navIcon.textContent = 'menu' : navIcon.textContent = 'close'
    navIcon.innerHTML.includes('close') ? navIcon.style.color = '#e74c3c' : navIcon.style.color = '#fff'
})

searchIcon.addEventListener('click', (e) => {
    e.preventDefault()
    searchBarMobile?.classList.contains('none') ? searchBarMobile?.classList.remove('none') : searchBarMobile?.classList.add('none')
    searchBarMobile?.classList.contains('none') ? searchIcon.textContent = 'search' : searchIcon.textContent = 'close'
    searchIcon.innerHTML.includes('close') ? searchIcon.style.color = '#e74c3c' : searchIcon.style.color = '#fff'
})

// const url = 'https://blgciguaqtqtubjofbfy.supabase.co/rest/v1/Animes?select=*'
// fetch(url, {
//     method: 'GET',
//     headers: {
//         apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZ2NpZ3VhcXRxdHViam9mYmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzNTc5MjEsImV4cCI6MTk4NzkzMzkyMX0.xzQBc-i_R_aKgMIvwCkYzTiuXYirlrDvW9oZ0GbI91M',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZ2NpZ3VhcXRxdHViam9mYmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzNTc5MjEsImV4cCI6MTk4NzkzMzkyMX0.xzQBc-i_R_aKgMIvwCkYzTiuXYirlrDvW9oZ0GbI91M'
//     }
// }).then(res => {
//     return res.json()
// }).then(res => console.log(res))


export { }