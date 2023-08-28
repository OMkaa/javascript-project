const phoneInput = document.querySelector ('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


phoneCheck.onclick= () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'no'
        phoneResult.style.color = 'red'
    }  
}




// TAB Slider
const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentTabIndex = 0; 

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const switchToNextTab = () => {
    hideTabContent();
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    showTabContent(currentTabIndex);
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (item === event.target) {
                hideTabContent();
                currentTabIndex = i;
                showTabContent(i);
            }
        });
    }
};

setInterval(switchToNextTab, 3000);

// Converter
// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const eur = document.querySelector('#eur')

// som.addEventListener('input', (event) =>{
//     // console.log(event.target.value);
//     const request = new XMLHttpRequest()
//     request.open('GET',"../data/converter.json" )
//     request.setRequestHeader("Content-type", "application.json")
//     request.send()


//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)

//     })
// })

// const eur = document.querySelector('#eur')

// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')




// const converter = (element, target , isTrue)=> {
//     element.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open('GET',"../data/converter.json" )
//         request.setRequestHeader("Content-type", "application.json")
//         request.send()

//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             if (isTrue) {
//                 target.value = (element.value / response.usd).toFixed(2)
//             }else {
//                 target.value = (element.value * response.usd).toFixed(2)
//             }
//             // element.value === '' ? target.vale = '' :false
//             element.value === '' && (target.value = '')

//         }
//     }
// }

// converter(som,usd,true)
// converter(usd,som,false)


const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchConverterData = async () => {
    try {
        const response = await fetch('../data/converter.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching converter data:', error);
    }
};

const converter = async (element, target, currency) => {
    const converterData = await fetchConverterData();

    element.addEventListener('input', () => {
        const inputValue = parseFloat(element.value);
        if (!isNaN(inputValue)) {
            if (currency === 'usd') {
                target.value = (inputValue / converterData.usd).toFixed(2);
            } else if (currency === 'eur') {
                target.value = (inputValue / converterData.eur).toFixed(2);
            } else if (currency === 'eur'){
                target.value = (inputValue / converterData.usd).toFixed(2)
            }
            else {
                target.value = (inputValue * converterData.usd).toFixed(2);
            }
        } else {
            target.value = '';
        }
    });
};

converter(som, usd, 'usd');
converter(som, eur, 'eur');
converter(usd, som, 'som');
converter(eur, som, 'som');


// const card = document.querySelector('.card')
// const btnPrev = document.querySelector('#btn-prev')
// const btnNext = document.querySelector('#btn-next')
// let count = 1

// btnNext.onclick = () => {
//     if (count < 200){
//         count++
//     }else {
//         count = 1
//     }
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style="color: ${data.completed ? 'green' : 'red'};">${data.completed}</p>
//                 <span>${data.id}</span>
//             `
//         })
// }

 fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
});


const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let count = 1;
            
fetchData(count);
            
 btnNext.onclick = () => {
 if (count < 200) {
     count++;
 } else {
    count = 1;
}
fetchData(count);
}
            
 btnPrev.onclick = () => {
  if (count > 1) {
       count--;
 } else {
    count = 200;
}
 fetchData(count);
}
            
 function fetchData(itemNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${itemNumber}`)
        .then(response => response.json())
        .then(data => {
         card.innerHTML = `
         <p>${data.title}</p>
         <p style="color: ${data.completed ? 'green' : 'red'};">${data.completed}</p>
         <span>${data.id}</span>
         `;
    1});
}
            