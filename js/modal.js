const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModal = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const exitModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
closeModal.onclick = () => exitModal()
modalTrigger.addEventListener('click', () => {
    openModal()
})
modal.addEventListener('click', (event) => {
    if (event.target === modal){
        exitModal()
    }
})
function modalShow(){
    setTimeout(() => {
        openModal()
    }, 10000)
}
modalShow()


function scrollAuto(){
    if ((window.scrollY +window.innerHeight) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll' , scrollAuto)
    }
}
window.addEventListener('scroll' , scrollAuto)





