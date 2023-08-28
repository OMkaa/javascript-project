// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)


// setTimeout(() =>{
//     let num = 0 
//     console.log(num);
//     setTimeout(() =>{
//         console.log(num +10);
//         setTimeout(() =>{
//             console.log(ten);
// }, 2000)
// }, 3000)
// }, 3000)

// console.log('Loading...');

// setTimeout(() =>{
//     const product = {
//         name: 'milk',
//         price: '$6'
//     }
//     console.table(product);
//     console.log('1 step');
//     setTimeout(() =>{
//         product.price = '$8'
//         console.table(product);
//         console.log('2 step');
//     },2000)
// },1000)



//Promise 
// console.log('Loading...')

// const promiseVariable = new Promise((resole ,reject) => {
//     setTimeout(() =>{
//         const product = {
//             name: 'milk',
//             price: '$6'
//         }
//         console.log('1 step');
//         console.table(product);
//         resole(product)
//         reject()
//     }, 2000)
// })

// const resoleData = (product) => {
//     setTimeout (() => {
//         product.price = '$8'
//         console.table(product);
//         console.log('2 step');
//     }, 1000)
// }

// const rejectData = (() => {
//     return console.error('ERROR! PROMISE IS NOT RESELVED');
// })

// promiseVariable.then(resoleData, rejectData)

// const promiseVariable = new Promise((resole) => {
//         setTimeout(() =>{
//             const product = {
//                 name: 'milk',
//                 price: '$6'
//             }
//             console.log('1 step');
//             console.table(product);
//             resole(product)
//         }, 2000)
//     })

// promiseVariable.then((product) => {
//     return new Promise( () =>{
//         setTimeout(() => {
//             product.soldOut =true
//             console.log('2 step');
//             console.table(product);
//         },2000)
//     })
// }).then((product) =>{
//     setTimeout(() =>{
//         product.soldOut = false
//         product.price = '$10'
//         console.log('3 step');
//         console.table(product);
//     }, 4000)
// }).catch(() =>{
//     return console.log('error');
// }).finally(() =>{
//     console.log('Finally');
// })

//fetch(), api

// fetch('https://jsonplaceholder.typicode.com/todos/100',{
//     method:"GET",
//     headers:{"Content-type": "application/json"},
// })
// .then((response) => response.json())
// .then((data) => console.log(data))