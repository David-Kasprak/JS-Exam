document.addEventListener('DOMContentLoaded', () => {
    function getQueryParam (param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const postId = getQueryParam('postId');

if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        .then((response) => response.json())
        .then((post) => {
            console.log(post)
        })
}
})
