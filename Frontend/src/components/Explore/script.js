// LEVEL OPTIONS

const levelSelectBtn = document.querySelector('.level-select-btn');
const levelInner = document.querySelector('.level-inner');

levelSelectBtn.addEventListener('click', () => {
    levelInner.classList.toggle('level-selec-js');
    levelSelectBtn.classList.toggle('level-select-svg');
});

const categorySelectBtn = document.querySelector('.category-select-btn');
const categoryInner = document.querySelector('.category-inner');

categorySelectBtn.addEventListener('click', () => {
    categoryInner.classList.toggle('category-selec-js');
    categorySelectBtn.classList.toggle('category-select-svg');
});

// SIDEBAR

const sidebarOne = document.querySelector('.sidebar-anchor-one');
const sidebarTwo = document.querySelector('.sidebar-anchor-two');
const coursesContainer = document.querySelector('.container-card');
const eventsContainer = document.querySelector('.container-card-events');

sidebarOne.addEventListener('click', () => {
    sidebarOne.classList.add('opened-anchor');
    sidebarTwo.classList.remove('opened-anchor');
    coursesContainer.style.display = 'grid';
    eventsContainer.style.display = 'none';
});

sidebarTwo.addEventListener('click', () => {
    sidebarOne.classList.remove('opened-anchor');
    sidebarTwo.classList.add('opened-anchor');
    coursesContainer.style.display = 'none';
    eventsContainer.style.display = 'grid';
});