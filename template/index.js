const navigationToggle = document.getElementById('navigation-toggle');
const navigationToggleMenu = document.getElementById('navigation-toggle-menu');
const uncheckCheckbox = () => navigationToggle.checked = false;
navigationToggleMenu.addEventListener('click', uncheckCheckbox);

