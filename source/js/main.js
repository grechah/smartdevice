const navButton = document.querySelector('.nav__button');
const mainButton = document.querySelector('.main__button');
const mainButtonMobile = document.querySelector('.main__button--mobile');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupNameField = document.querySelector('.popup__name');
const popupCloseButton = document.querySelector('.popup__close');
const aboutButton = document.querySelector('.about__button');
const hideButton = document.querySelector('.about__button--secondary');
const aboutDescription = document.querySelector('.about__description--secondary');
const sitemap = document.querySelector('.sitemap');
const sitemapList = document.querySelector('.sitemap__list');
const contacts = document.querySelector('.contacts');
const contactsWrapper = document.querySelector('.contacts__wrapper');
const sitemapOpenButton = document.getElementById('sitemap__button--open');
const sitemapCloseButton = document.getElementById('sitemap__button--close');
const contactsOpenButton = document.querySelector('.contacts__button--open');
const contactsCloseButton = document.querySelector('.contacts__button--close');
const phone = document.querySelector(".popup__telephone");

navButton.addEventListener('click', () => {
  popup.classList.remove('closed');
  popupContainer.classList.remove('closed');
  popupContainer.classList.add('show')
  popup.classList.add('show')
  popupNameField.focus();
});


popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('show');
  popupContainer.classList.remove('show');
  popup.classList.add('closed');
  popupContainer.classList.add('closed');
});

mainButton.addEventListener('click', () => {
  window.scrollTo({
    top:3100,
    left:3100,
    behavior: 'smooth'
  });
});

mainButtonMobile.addEventListener('click', () => {
  window.scrollTo({
    top:5000,
    left:5000,
    behavior: 'smooth'
  });
});

aboutButton.addEventListener('click', () => {
  aboutDescription.classList.toggle('hidden')
  if (aboutDescription.classList.contains('hidden')) {
    hideButton.classList.add('hidden');
    aboutButton.classList.remove('hidden');
  } else {
    aboutButton.classList.add('hidden');
    hideButton.classList.remove('hidden')
  }
});

hideButton.addEventListener('click', () => {
  aboutDescription.classList.toggle('hidden')
  if (aboutDescription.classList.contains('hidden')) {
    hideButton.classList.add('hidden');
    aboutButton.classList.remove('hidden');
  } else {
    aboutButton.classList.add('hidden');
    hideButton.classList.remove('hidden')
  }
});

sitemap.addEventListener('click', (evt) => {

  if (!contactsWrapper.classList.contains('hidden')) {
    contactsWrapper.classList.add('closed')
    contactsCloseButton.classList.add('hidden');
    contactsOpenButton.classList.remove('hidden');
  }
  if (evt.target === sitemapOpenButton) {
    sitemapOpenButton.classList.add('hidden');
    sitemapCloseButton.classList.remove('hidden');
    sitemapList.classList.remove('closed');
  } else {
    sitemapOpenButton.classList.remove('hidden');
    sitemapCloseButton.classList.add('hidden');
    sitemapList.classList.add('closed');
  }
})

contacts.addEventListener('click', (evt) => {
  if (!sitemapList.classList.contains('closed')) {
    sitemapList.classList.add('closed')
    sitemapCloseButton.classList.add('hidden');
    sitemapOpenButton.classList.remove('hidden');
  }
  if (evt.target.classList.contains('contacts__button--close')) {
    contactsCloseButton.classList.add('hidden');
    contactsOpenButton.classList.remove('hidden');
    contactsWrapper.classList.add('closed');
  } else {
    contactsOpenButton.classList.add('hidden');
    contactsCloseButton.classList.remove('hidden');
    contactsWrapper.classList.remove('closed');
  }
})
