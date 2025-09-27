const themeSelector = document.querySelector('#theme-selector');
function changeTheme() {

    const value = themeSelector.value;
    const contentDiv = document.querySelector('.content');
    const body = document.body;
    const logo = document.querySelector('img');


    if (value === 'Light') {

    contentDiv.classList.remove('Dark');
    body.classList.remove('Dark');
        logo.src = '../image/byui-logo_blue.webp';
    } else {
    contentDiv.classList.add('Dark');
    body.classList.add('Dark');
        logo.src = '../image/byui-logo_white.png';
    }
}


themeSelector.addEventListener('change', changeTheme);
changeTheme();
