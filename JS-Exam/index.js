const wrap = document.getElementById('wrapIndex');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (let user of users) {
            const div = document.createElement("div");
            const button = document.createElement("button");
            div.innerText = `Name: ${user.name} | ID: ${user.id}`;
            button.innerText = 'See Details'
            button.onclick = function () {
                window.location.href = `user-details.html?userId=${user.id}`;
            };
            div.appendChild(button);
            wrap.appendChild(div);
        }
    })