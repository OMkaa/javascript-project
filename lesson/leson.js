//event loop - цикл Событий
//Основы асинхронности


// console.log();

// setTimeout(() =>{
//     console.log(1);
// }, 1000)

// const interval= setInterval(() => {
//     console.log('hello');
// }, 1000)

// setTimeout(()=>{
//     clearInterval(interval)
// }, 5000)

// const logger = () => console.log(1);

// setTimeout(logeer, 3000)

//Event loop - цикл Событий



// const people = [
//     {
//       name: "John Doe",
//       age: 30,
//       job: "Developer",
//     },
//     {
//       name: "Jane Smith",
//       age: 28,
//       job: "Designer",
//     },
//   ];
  
//   const container = document.getElementById("people-container");
  
//   const request = new XMLHttpRequest()
  
//   request.open("GET",'data.json')
//   request.setRequestHeader("Content-type","application/json")
//   request.send()
//   console.log(request);



const container = document.getElementById("people-container");

const request = new XMLHttpRequest();

request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.onload = function () {
  if (request.status === 200) {
    const people = JSON.parse(request.responseText);

    people.forEach(person => {
      const card = document.createElement("div");
      card.classList.add("card");

      const name = document.createElement("h2");
      name.textContent = person.name;

      const age = document.createElement("p");
      age.textContent = `Age: ${person.age}`;

      const job = document.createElement("p");
      job.textContent = `Job: ${person.job}`;

      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(job);

      container.appendChild(card);
    });
  } 
};

