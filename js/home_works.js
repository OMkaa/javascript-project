const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


// const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const regExp = /\w+@\w+\.\w+/
// const regExp = /\w+@\w+\./

    gmailButton.addEventListener('click', () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = ')'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = '('
        gmailResult.style.color = 'red'
    }
})


// const childBlock = document.querySelector('child_block')

// function

let offset = 0

function move(){
    document.querySelector('.child_block').style.left = offset + 'px'
    offset = offset +5
    if(offset > 445){
        return true
    }
    move()
}
move()