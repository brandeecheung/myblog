const ld_blog_button = document.getElementById('ldmode-blog');
const ld_index_button = document.getElementById('ldmode-index');
const ldmode = document.getElementById('ldmode-index');

if (ld_blog_button) {
    ld_blog_button.addEventListener('click', toggle_light_dark);
}

if (ld_index_button) {
    ld_index_button.addEventListener('click', toggle_light_dark);
}

function toggle_light_dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    const demoElement = document.getElementById("ldmode-index");
    const result = ""; // Replace "😊" with the emoji you want to use

    if (ldmode.textContent === "🌞") {
        demoElement.innerHTML = "🌘";
    } else {
        ldmode.textContent = "🌘";
        ldmode.textContent = "🌞";
    }
}