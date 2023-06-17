const SLIDER = (function () {
    var index = 0;

    function changeElement(arr, newElements, content) {
        if (arr.children.length >= 4) {
            for (let i = 4; i < arr.children.length; i = 4) {
                arr.children[4].remove()
            }
        }

        content.innerHTML = ''

        newElements.forEach(function(element) {
            if (element.tagName == 'IMG') {
                arr.append(element)
            } else {
                content.append(element)
            }
        })
    }

    // creates images & radio btn then adds it to the DOM
    function INIT(arr, container, element_arr, content) {
        for (let i = 0; i < element_arr.length; i++) {
            const RADIO = document.createElement('input')
            RADIO.type = 'radio'
            RADIO.name = 'highlight'
            RADIO.classList.add('slider__radio')

            RADIO.addEventListener('click', function () {
                index = i;

                changeElement(arr, element_arr[index], content)
            })

            if (i == 0) { 
                RADIO.checked = true;
                changeElement(arr, element_arr[0], content)
            }

            container.appendChild(RADIO)
        }

    }

    function BTN_FORWARD(btn_forward, arr, input_elements, element_arr, content) {
        btn_forward.addEventListener('click', function () {
            index++;

            if (index > element_arr.length - 1) { index = 0; }

            changeElement(arr, element_arr[index], content)

            const radioList = input_elements.children
            radioList[index].checked = true;
        })
    }

    function BTN_BACK(btn_Back, arr, input_elements, element_arr, content) {
        btn_Back.addEventListener('click', function () {
            index--;

            if (index < 0) { index = element_arr.length - 1 }

            changeElement(arr, element_arr[index], content)

            const radioList = input_elements.children;
            radioList[index].checked = true;
        })
    }

    function animationStart(arr, btn_forward, btn_Back) {
        arr.addEventListener('animationstart', function() {
            btn_forward.disable = true;
            btn_Back.disable = true;
        })
    }

    function animationEnd(arr, btn_forward, btn_Back) {
        arr.addEventListener('animationend', function(anim) {
            btn_forward.disable = false;
            btn_Back.disable = false;
        })
    }

    function keyPress(forward, back) {
        document.addEventListener('keyup', function (event) {
            if (event.key == 'ArrowRight') {
                forward.click();
            } else if (event.key == 'ArrowLeft') {
                back.click();
            }
        })
    }

    return {
        INIT,
        BTN_FORWARD,
        BTN_BACK,
        keyPress
    };
})()