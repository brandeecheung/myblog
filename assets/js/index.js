// Get the button element
const button = document.getElementById('postSubmitBtn');
// Get the text box and button elements
const usernameTextBox = document.getElementById('postUsername');
const titleTextBox = document.getElementById('postTitle');
const contentTextBox = document.getElementById('postContent');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Get the content of the text box
    const username = usernameTextBox.value;
    const title = titleTextBox.value;
    const content = contentTextBox.value;

    if (!username || !title || !content) {
        return;
    }

    const post = {
        username: username,
        title: title,
        content: content
    }

    // localStorage.setItem("posts", "[]")

    let postsString = localStorage.getItem("posts");

    if (postsString === null) {
        postsString = "[]";
    }

    const posts = JSON.parse(postsString);
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
});