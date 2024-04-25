document.addEventListener('DOMContentLoaded', function () {

    const postContainer = document.querySelector('.post-container');

    const posts = JSON.parse(localStorage.getItem("posts"));

    for (let i = 0; i < posts.length; i++) {
        // create the html to show the posts
        const post = posts[i];

        const postTitle = post.title;
        const postContent = post.content;
        const postUsername = post.username;

        const newPost = document.createElement('div');
        newPost.className = 'post-box';
        newPost.innerHTML = ` 
            <h1 class="post-title">${postTitle}</h1><br> 
            <h2 class="post-content">${postContent}</h2><br> 
            <h3 class="post-username">Written by ${postUsername}</h3></br>
        `;

        post.username;
        post.title;
        post.content;

        postContainer.insertBefore(newPost,
            postContainer.firstChild);
    }
});