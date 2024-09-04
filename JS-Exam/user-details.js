const wrap = document.getElementById('wrap');

document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam (param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const userId = getQueryParam('userId');

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((user) => {
                const userDiv = document.createElement("div");

                for (let item in user) {
                        console.log(item, user[item])
                        // Delete the log above later
                        const div = document.createElement("div");
                        // CHECK
                        if (typeof user[item] === 'object') {
                            div.innerText = `${item} - ${JSON.stringify(user[item])}`
                        }
                        else {
                            div.innerText = `${item} - ${user[item]}`;
                        }
                        // CHECK END
                        userDiv.appendChild(div);

                    }

                wrap.appendChild(userDiv);
            })
            }
    })















// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (let user of users) {
//             const userDiv = document.createElement("div");
//             userDiv.classList.add('user-div');
//
//             for (let item in user) {
//                 console.log(item, user[item])
//                 // Delete the log above later
//                 const div = document.createElement("div");
//                 // CHECK
//                 if (typeof user[item] === 'object') {
//                     div.innerText = `${item} - ${JSON.stringify(user[item])}`
//                 }
//                 else {
//                     div.innerText = `${item} - ${user[item]}`;
//                 }
//                 // CHECK END
//                 userDiv.appendChild(div);
//                 wrap.appendChild(userDiv);
//
//             }
//         }
//     })