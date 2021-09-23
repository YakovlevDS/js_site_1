const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => { modal.classList.remove('hidden')})

modal.addEventListener('click', (e) => {
    const t = e.target
    if (t.classList.contains('overlay')
        || t.classList.contains('modal__close'))
         {
        modal.classList.add('hidden')
    }

})
