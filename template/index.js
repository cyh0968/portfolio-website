window.onload = (event) => {
    console.log('successfully loaded a page!');
    const navigationToggle = document.getElementById('navigation-toggle');
    const navigationToggleMenu = document.getElementById('navigation-toggle-menu');
    const uncheckCheckbox = () => {
        navigationToggle.checked = false;
    }
    
    navigationToggleMenu.addEventListener('click', (event) => {
        if (navigationToggle.checked) uncheckCheckbox();
    })
};

