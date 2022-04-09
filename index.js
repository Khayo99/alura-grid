const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});

const menuInicio = document.querySelector('.menu-lateral__link--inicio')
const inicio = document.querySelector('.menu-lateral__link')


menuInicio.addEventListener('click', () => {
    inicio.classList.toggle('menu-lateral__link--ativo')
});

const menuVideos = document.querySelector('.menu-lateral__link--videos')
const videos = document.querySelector('.menu-lateral__link--videos')


menuVideos.addEventListener('click', () => {
    videos.classList.toggle('menu-lateral__link--ativo')
});

const menuPicos = document.querySelector('.menu-lateral__link--picos')
const picos = document.querySelector('.menu-lateral__link--picos')


menuPicos.addEventListener('click', () => {
    picos.classList.toggle('menu-lateral__link--ativo')
});

const menuIntegrantes = document.querySelector('.menu-lateral__link--integrantes')
const integrantes = document.querySelector('.menu-lateral__link--integrantes')


menuIntegrantes.addEventListener('click', () => {
    integrantes.classList.toggle('menu-lateral__link--ativo')
});

const menuCamisa = document.querySelector('.menu-lateral__link--camisa')
const camisa = document.querySelector('.menu-lateral__link--camisa')


menuCamisa.addEventListener('click', () => {
    camisa.classList.toggle('menu-lateral__link--ativo')
});

const menuPinturas = document.querySelector('.menu-lateral__link--pinturas')
const pinturas = document.querySelector('.menu-lateral__link--pinturas')


menuPinturas.addEventListener('click', () => {
    pinturas.classList.toggle('menu-lateral__link--ativo')
});