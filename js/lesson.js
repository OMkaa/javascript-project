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
