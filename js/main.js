/* find all floors */
const allFloors = document.querySelectorAll('.home__img path');
const counterFloor = document.querySelector('.counter');
const counterUp = document.querySelector('.counter__up');
const counterDown = document.querySelector('.counter__down');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close_btn');
const modalOpenBtn = document.querySelector('.modal__open_btn');


/* FUNCTIONS ====================================================== */
//  find all floors
const findAllFloors = () => {
  allFloors.forEach((elem) => {
    elem.addEventListener('mousemove', () => {
      counterFloor.innerHTML = elem.id;
    })
  });
}

// find click
const getUpFloor = () => {
  counterUp.addEventListener('click', () => {
    const counterFloor = document.querySelector('.counter');
    let currentValue = counterFloor.innerHTML;
    currentValue++;
    counterFloor.innerHTML = currentValue.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
  })
}

const getDownFloor = () => {
  counterDown.addEventListener('click', () => {
    const counterFloor = document.querySelector('.counter');
    let currentValue = counterFloor.innerHTML;
    currentValue--;
    counterFloor.innerHTML = currentValue.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
  })
}

// open modal popup
const openModalPopup = () => {
  allFloors.forEach((elem) => {
    elem.addEventListener('click', () => {
      modal.classList.add('modal__active');
    })
  })
}

// close modal popup
const closeModalPopup = () => {
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal__active')
    console.log('modal close')
  })
}


const openModal = () => {
  modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('modal__active');
  })
}


/*   ==================================================================== */
findAllFloors();
getUpFloor();
getDownFloor();
openModalPopup();
closeModalPopup();
openModal();
