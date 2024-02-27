const container = document.querySelector(".heroCont");
const children = document.querySelectorAll(".item");

let currentIndex = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function cart1() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev1();
};

function updateClassesOnPrev1() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`car${newIndex}`);
    });
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

function cart2() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev2();
};

function updateClassesOnPrev2() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carr${newIndex}`);
    });
}

function cart3() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev3();
};

function updateClassesOnPrev3() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carrr${newIndex}`);
    });
}

function cart4() {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev4();
};

function updateClassesOnPrev4() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `car1`, `car2`, `car3`, `car4`, `carrrr1`, `carrrr2`, `carrrr3`, `carrrr4`, `carrr1`, `carrr2`, `carrr3`, `carrr4`);
        child.classList.add(`carrrr${newIndex}`);
    });
}



// ////////////////////////////

// var parent1 = document.getElementById('parent1');
// var content1 = document.getElementById('content1');
// var parent2 = document.getElementById('parent2');
// var content2 = document.getElementById('content2');
// var parent3 = document.getElementById('parent3');
// var content3 = document.getElementById('content3');
// var parent4 = document.getElementById('parent4');
// var content4 = document.getElementById('content4');

// parent1.addEventListener('animationstart', function(event) {
//     if (event.animationName === 'HideCART1') {
//         content1.style.display = 'block';
//     }
// });

// parent1.addEventListener('animationend', function(event) {

//     if (event.animationName === 'HideCART1') {
//         content1.style.display = 'none'; 
//     }
// });
// ///////////////////
// parent2.addEventListener('animationstart', function(event) {
//     if (event.animationName === 'HideCART111') {
//         content2.style.display = 'block';
//     }
// });

// parent2.addEventListener('animationend', function(event) {

//     if (event.animationName === 'HideCART111') {
//         content2.style.display = 'none'; 
//     }
// });
// /////////////////////
// parent3.addEventListener('animationstart', function(event) {
//     if (event.animationName === 'HideCART11') {
//         content3.style.display = 'block';
//     }
// });

// parent3.addEventListener('animationend', function(event) {

//     if (event.animationName === 'HideCART111') {
//         content3.style.display = 'none'; 
//     }
// });
// /////////////////////
// parent4.addEventListener('animationstart', function(event) {
//     if (event.animationName === 'HideCART1111') {
//         content4.style.display = 'block';
//     }
// });

// parent4.addEventListener('animationend', function(event) {

//     if (event.animationName === 'HideCART1111') {
//         content4.style.display = 'none'; 
//     }
// });











