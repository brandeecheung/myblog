const ld_blog_button = document.getElementById('ldmode-blog');
const ld_index_button = document.getElementById('ldmode-index');

if (ld_blog_button) {
    ld_blog_button.addEventListener('click', toggle_light_dark);
}

if (ld_index_button) {
    ld_index_button.addEventListener('click', toggle_light_dark);
}

function toggle_light_dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}