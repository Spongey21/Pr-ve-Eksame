const ELEMENT = document.querySelector('.slider')
const FORWARD = document.querySelector('.slider__btnForward')
const BACK = document.querySelector('.slider__btnBack')
const POINTER = document.querySelector('.slider__pointer')
const CONTENT = document.querySelector('.slider__content')

const arr = []

const img = document.createElement('img')
img.src = `./assets/billeder/COLOURBOX2556345.jpg`
img.classList.add('slider__img')

const title = document.createElement('h1')
title.textContent = 'Event Centrum skaber'
title.classList.add('slider__title')

const heading = document.createElement('h1')
heading.textContent = 'den helt rigtige stemning'
heading.classList.add('slider__heading')

const paragraph = document.createElement('p')
paragraph.textContent = '...i jeres egne rammer (kantine, lager, parkeringskælder), udendørs (skov, strand) eller på hoteller & konferencesteder overalt i Danmark.'
paragraph.classList.add('slider__about')

const button = document.createElement('button')
button.textContent = 'Læs mere'
button.classList.add('slider__readMore')

arr.push([img, title, heading, paragraph, button])

SLIDER.INIT(ELEMENT, POINTER, arr, CONTENT)

SLIDER.BTN_FORWARD(FORWARD, ELEMENT, POINTER, arr, CONTENT)

SLIDER.BTN_BACK(BACK, ELEMENT, POINTER, arr, CONTENT)

SLIDER.keyPress(FORWARD, BACK)