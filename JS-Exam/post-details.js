const wrap = document.getElementById('wrapPost');

document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam (param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const postId = getQueryParam('postId');

if (postId) {
    const postHeading = document.createElement('h3');
    postHeading.innerText = 'Post:'
    wrap.appendChild(postHeading)

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
        const container = document.createElement("div");
        container.classList.add('post-container')
            for (let item in post) {
            const postItem = document.createElement("p");
                postItem.innerHTML = `<span class="bold-text">${item}</span> - ${post[item]}`;
                container.appendChild(postItem);
            }
            wrap.append(container);
            const commentsHeading = document.createElement("h3");
            commentsHeading.innerText = 'Comments:'
            wrap.appendChild(commentsHeading);

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then((response) => response.json())
                .then((comments) => {
                    const commentsContainer = document.createElement("div");
                    commentsContainer.classList.add('comments-container');
                    for (let comment of comments) {
                        const commentDiv = document.createElement("div");
                        commentsContainer.appendChild(commentDiv);
                        for (let item in comment) {
                            const  commentItem = document.createElement("p");
                            commentItem.innerHTML = `<span class="bold-text">${item}</span> - ${comment[item]}`
                            commentDiv.appendChild(commentItem);
                            wrap.appendChild(commentsContainer);
                        }
                    }
                })

        })
}
})
