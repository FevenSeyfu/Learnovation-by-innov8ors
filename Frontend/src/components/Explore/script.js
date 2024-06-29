// SIDEBAR

const sidebarAnchors = document.querySelectorAll('.sidebar-anchor');


/* for (const sidebarAnchor of sidebarAnchors) {
    sidebarAnchor.addEventListener('click', () => {
        sidebarAnchor.classList.remove('opened-anchor');
    });
}; */

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