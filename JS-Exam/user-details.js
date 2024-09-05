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
                userDiv.classList.add('userDiv');
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
                // ADDING POSTS FOR THE USER
                const postsOfTheUserButton = document.createElement("button");
                postsOfTheUserButton.innerText = 'Post of current user'
                userDiv.appendChild(postsOfTheUserButton);
                postsOfTheUserButton.onclick = function () {
                    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                        .then((response) => response.json())
                        .then((posts) => {
                            console.log(posts)
                            // Delete the log above later
                            const allPostsDiv = document.createElement("div");
                            allPostsDiv.classList.add('allPostsDiv')
                            for (let post of posts) {
                                const postDiv = document.createElement("div");
                                postDiv.innerText = `Post title - ${post.title}`;
                                const button = document.createElement("button");
                                button.innerText = 'See Post Details'
                                button.onclick = function () {
                                    // window.location.href = `https://jsonplaceholder.typicode.com/posts/${post.id}`
                                    window.location.href = `post-details.html?postId=${post.id}`;
                                }

                                postDiv.appendChild(button);
                                allPostsDiv.appendChild(postDiv);
                                userDiv.appendChild(allPostsDiv);
                            }
                        })
                }


            })
            }
    })