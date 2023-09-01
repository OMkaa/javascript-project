// const phoneInput = document.querySelector ('#phone_input')
// const phoneCheck = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')

// const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


// phoneCheck.onclick= () => {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerHTML = 'ok'
//         phoneResult.style.color = 'green'
//     }else {
//         phoneResult.innerHTML = 'no'
//         phoneResult.style.color = 'red'
//     }  
// }


const phoneInput = document.querySelector('#phone_input');
const phoneCheck = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

const validatePhoneNumber = (inputValue) => {
  if (regExp.test(inputValue)) {
    return 'ok';
  } else {
    return 'no';
  }
};

phoneCheck.addEventListener('click', async () => {
  const inputValue = phoneInput.value.trim(); 

  if (inputValue) {
    try {
      const result = validatePhoneNumber(inputValue);

      phoneResult.innerHTML = result;
      phoneResult.style.color = result === 'ok' ? 'green' : 'red';
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  } else {
    phoneResult.innerHTML = 'Поле не должно быть пустым';
    phoneResult.style.color = 'red';
  }
});



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
const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchConverterData = async () => {
    try {
        const response = await fetch('../data/converter.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const converter = async (element, target, currency) => {
    const converterData = await fetchConverterData();

    const calculate = (value, sourceCurrency, targetCurrency) => {
        if (sourceCurrency === 'som') {
            return (value / converterData[targetCurrency]).toFixed(2);
        } else if (targetCurrency === 'som') {
            return (value * converterData[sourceCurrency]).toFixed(2);
        } else {
            const somValue = value * converterData[sourceCurrency];
            return (somValue / converterData[targetCurrency]).toFixed(2);
        }
    };

    element.addEventListener('input', () => {
        const inputValue = parseFloat(element.value);
        if (!isNaN(inputValue)) {
            if (currency === 'usd') {
                eur.value = calculate(inputValue, 'usd', 'eur');
                som.value = calculate(inputValue, 'usd', 'som');
            } else if (currency === 'eur') {
                usd.value = calculate(inputValue, 'eur', 'usd');
                som.value = calculate(inputValue, 'eur', 'som');
            } else if (currency === 'som') {
                usd.value = calculate(inputValue, 'som', 'usd');
                eur.value = calculate(inputValue, 'som', 'eur');
            }
        } else {
            usd.value = '';
            eur.value = '';
            som.value = '';
        }
    });
};

converter(som, usd, 'som');
converter(som, eur, 'som');
converter(usd, som, 'usd');
converter(eur, som, 'eur');



//CARD SWITCHER

async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let count = 1;

btnNext.onclick = async () => {
    if (count < 200) {
        count++;
    } else {
        count = 1;
    }
    await fetchData(count);
};

btnPrev.onclick = async () => {
    if (count > 1) {
        count--;
    } else {
        count = 200;
    }
    await fetchData(count);
};

async function fetchData(itemNumber) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemNumber}`);
        if (!response.ok) {
            // Error(`error! Status: ${response.status}`);
        }
        const data = await response.json();

        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'};">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error(error);
    }
}
fetchData(count);


//weather

// const cityName = document.querySelector('.cityName')
// const city = document.querySelector('.city')
// const temp = document.querySelector('.temp')
// const apikey = 'e417df62e04d3b1b111abeab19cea714'
// const basseUrl = 'http://api.openweathermap.org/data/2.5/weather'

// citySerch = () =>{
//     cityName.oninput = (event) =>{
//         fetch(`${basseUrl}?q=${event.target.value}&appid=${apikey}`)
//             .then(response => response.json())
//             .then(data =>{
//                 city.innerHTML = data?.name ? data?.name : 'Город не найден...'
//                 temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C': '...'
//             })
//     }
// }

// citySerch()

const cityName = document.querySelector('.cityName');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const apikey = 'e417df62e04d3b1b111abeab19cea714';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

const citySearch = async () => {
  cityName.addEventListener('input', async (event) => {
    try {
      const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apikey}`);
      const data = await response.json();

      city.innerHTML = data?.name ? data?.name : 'Город не найден...';
      temp.innerHTML = data?.main?.temp
        ? `${Math.round(data?.main?.temp - 273)}&deg;C`
        : '...';
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  });
};

citySearch();
