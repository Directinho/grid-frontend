// Clonando o elemento HTML
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);

// Adicionando o clone slide dentro do Logos
document.querySelector('.logos').appendChild(cloneSlide);