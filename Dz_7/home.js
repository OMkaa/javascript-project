const cardsContainer = document.getElementById('cards-container');

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

async function renderCards() {
    const data = await fetchData();

    if (!data || data.length === 0) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = 'img/monaliza.jpg'; 
        card.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = item.title;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = item.body;
        card.appendChild(description);

        cardsContainer.appendChild(card);
    });
}

renderCards();
