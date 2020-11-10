const navigationToggle = document.getElementById('navigation-toggle');
const navigationToggleMenu = document.getElementById('navigation-toggle-menu');
const defaultDisplaySetting = navigationToggleMenu.style.display;
const uncheckCheckbox = () => {
    navigationToggle.checked = false;
}
const hideNavigationToggleMenu = () => {
    if (navigationToggle.checked) {
        navigationToggle.style.display = 'none';
        uncheckCheckbox();
    } else {
        navigationToggle.style.display = defaultDisplaySetting;
    }
}

window.onload = (event) => {
    console.log('successfully loaded a page!');
    navigationToggleMenu.addEventListener('click', uncheckCheckbox);
};

