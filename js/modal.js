const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => { modal.classList.remove('hidden')})

modal.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('overlay' || 'modal__close')
        || target.classList.contains('modal__close'))
         {
        modal.classList.add('hidden')
    }

})
