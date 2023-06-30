
const homes = document.querySelector('ul');
const diceNums = document.querySelectorAll('.dice div');
const dice = document.querySelector('.dice');
let interval = null;
let wait = false;

// make some homes to put marblr in it

for (let i = 0; i < 10; i++) {
    const newElement = document.createElement('li');
    homes.appendChild(newElement)
    if ((i + 1) % 2 == 0) {
        newElement.style.flexDirection = `row-reverse`
    }
}

const rows = document.querySelectorAll('li');

let rowschildren = rows.children;
rows.forEach(function (item) {
    for (let j = 0; j < 10; j++) {
        const newHome = document.createElement('div');
        newHome.classList.add('home');
        item.appendChild(newHome)
    }
})

const home = document.querySelectorAll('.home');
home.forEach(function (item, index) {
    home[0].innerHTML = ` <div class="marble"></div>`
})

let currentindex = 0;
let counter = 0;
let randomNum = "";

dice.addEventListener('click', function () {
    // set dic image with random 
    if (!wait) {
        randomNum = Math.ceil(Math.random() * 6);
        diceNums.forEach((item, index) => {

            if (item.dataset.num == randomNum) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
            wait = true;
        })

        // put marble in homes
        if (wait == true) {
            if (randomNum + currentindex < 100) {
                interval = setInterval(function () {
                    if (currentindex < 100) {
                        currentindex++;
                        counter++;
                        for (let i = 0; i < home.length; i++) {
                            home[i].innerHTML = "";
                        }
                        home[currentindex].innerHTML = `<div class="marble"></div>`
                        console.log(currentindex);
                        if (counter == randomNum) {
                            clearInterval(interval);
                            counter = 0;
                            // ------------conditions of snake and ladder
                            conditions(4, 26);
                            conditions(8, 50);
                            conditions(12, 6);
                            conditions(27, 53);
                            conditions(21, 59);
                            conditions(79, 42);
                            conditions(43, 78);
                            conditions(98, 3);
                            conditions(85, 45);
                            conditions(65, 87);
                            conditions(52, 68);
                            conditions(90, 48);
                            conditions(70, 91);
                            conditions(84, 96);
                            conditions(36, 18);
                            wait = false;
                        }
                        if (currentindex == 99) {
                            setTimeout(function () {
                                alert('you win');
                                currentindex = 0;
                                counter = 0;
                                home.forEach(function (item) {
                                    item.innerHTML = "";
                                    home[0].innerHTML = ` <div class="marble"></div>`;
                                })
                            }, 20)
                        }
                    }
                }, 200)
            }
            else{
                    wait = false;
            }
        }
    }
})

// conditions of snake and ladder function

function conditions(a, b) {
    if (currentindex == a) {
        setTimeout(function () {

            home[currentindex].innerHTML = ""
            home[b].innerHTML = ` <div class="marble"></div>`
            currentindex = b;
        }, 200)
    }
}

