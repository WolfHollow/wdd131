const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', clickdropbtn);

function clickdropbtn() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('hide');
}

const dialog = document.querySelector('dialog');
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openModal);

function openModal(event) {
    event.target.closest('img')
        ? (dialog.showModal(),
          dialog.querySelector('img').setAttribute('src', event.target.src.replace('-sm', '-full')),
          dialog.querySelector('img').setAttribute('alt', event.target.alt))
        : null;
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', closeModal);

function closeModal() {
    dialog.close();
}

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
})

