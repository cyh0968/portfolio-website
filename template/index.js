const navigationToggle = document.getElementById('navigation-toggle');
const navigationToggleMenu = document.getElementById('navigation-toggle-menu');

const uncheckCheckbox = () => {
    navigationToggle.checked = false;
}

window.onload = (event) => {
    console.log('successfully loaded a page!');
    navigationToggleMenu.addEventListener('click', uncheckCheckbox);
};

