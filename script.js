

const hamMenu = document.querySelector('.hamburgermenu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');


})


document.querySelectorAll(".collapsible-header").forEach((header) => {
  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    // Toggle expand/collapse
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    // Toggle arrow direction & boldness
    header.classList.toggle("active");
  });
});