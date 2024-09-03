const wrap = document.getElementById('wrap');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (let user of users) {
           const div = document.createElement("div");
           div.innerText = `Name: ${user.name} | ID: ${user.id}`;
           wrap.appendChild(div)
        }
    })