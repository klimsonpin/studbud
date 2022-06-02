let tabs = document.querySelectorAll('.tabs__toggle'),
contents = document.querySelectorAll('.tabs__content');

//The event listener looks out for when the user clicks a tab and when they do the current content page and tab that they are on will no longer be 'is-active' .
//The 'is-active' will then be added to the new content page and tab which removes the old content page and replaces it with the new.
tabs.forEach((tab, index) => {
tab.addEventListener('click', () => {
    contents.forEach((content) => {
        content.classList.remove('is-active');
    });
    tabs.forEach((tab) => {
        tab.classList.remove('is-active');
    });
    contents[index].classList.add('is-active');
    tabs[index].classList.add('is-active');
});
});



