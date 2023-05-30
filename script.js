const btnTop = document.querySelector('.btn-top')
const btnDark = document.querySelector('#toggle')
const html = document.querySelector('html')
const btnHbs = document.querySelector('#btn-hbs')
const sectionHbs = document.querySelector('.hobbies')
const hamburguer = document.querySelector('.hamburguer')
const navegacao = document.querySelector('.navegacao')

hamburguer.addEventListener('click', ()=>{
    navegacao.classList.toggle('hide')
})
btnTop.addEventListener('click', (e) => {
    window.scrollTo(0, 0)
})
btnDark.addEventListener('click', function () {
    html.classList.toggle('dark-mode')
    btnDark.classList.toggle('checked')

    if(html.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode', 'dark-mode')
        btnDark.classList.add('checked')
    } else{
        localStorage.setItem('dark-mode', 'light-mode')
        btnDark.classList.remove('checked')
    }
})
btnHbs.addEventListener('click', () => {
    sectionHbs.classList.toggle('show')
})