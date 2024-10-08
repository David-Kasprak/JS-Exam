const wrap = document.getElementById('wrapUser');

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
                userDiv.classList.add('user-div');
                for (let item in user) {
                        const itemUser = document.createElement("p");
                        // CHECKING IF KEY IS OBJECT
                        if (typeof user[item] === 'object') {
                            // itemUser.innerHTML = `<span class="bold-text">${item}</span> - ${JSON.stringify(user[item])}`
                             itemUser.innerHTML = `<span class="bold-text">${item}:</span>`;
                            const ul = document.createElement("ul");
                            for (const subItem in user[item]) {
                                const li = document.createElement("li");
                                li.innerHTML = `<span class="capitalized-text-ul">${subItem}</span> - ${user[item][subItem]}`
                                ul.appendChild(li);
                            if (item === 'address' && subItem === 'geo') {
                                li.innerHTML = `<span class="capitalized-text-ul">${subItem}</span> - ${JSON.stringify(user[item][subItem])}`;
                            }
                            }
                            userDiv.appendChild(itemUser);
                            userDiv.appendChild(ul);
                        }
                        else {
                            itemUser.innerHTML = `<span class="bold-text">${item}</span> - ${user[item]}`;
                            userDiv.appendChild(itemUser);
                        }
                        // CHECK END
                    }
                wrap.appendChild(userDiv);
                // ADDING POSTS FOR THE USER
                const postsOfTheUserButton = document.createElement("button");
                postsOfTheUserButton.innerText = 'Posts of the current user'
                wrap.appendChild(postsOfTheUserButton);
                postsOfTheUserButton.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                        .then((response) => response.json())
                        .then((posts) => {
                            const allPostsDiv = document.createElement("div");
                            allPostsDiv.classList.add('allPostsDiv')
                            for (let post of posts) {
                                const postDiv = document.createElement("div");
                                postDiv.innerHTML = `<span class="bold-text">Post title</span><span class="capitalized-text">${post.title}</span>`;
                                const button = document.createElement("button");
                                button.innerText = 'See Post Details';
                                button.onclick = function () {
                                    // window.location.href = `https://jsonplaceholder.typicode.com/posts/${post.id}`
                                    window.location.href = `post-details.html?postId=${post.id}`;
                                }
                                postDiv.appendChild(button);
                                allPostsDiv.appendChild(postDiv);
                                wrap.appendChild(allPostsDiv);
                            }
                             postsOfTheUserButton.disabled = true;
                        })
                }
            })
            }
    })