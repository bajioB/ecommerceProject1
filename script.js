

// Now let's show the navbar when we click on the outdent icon on smaller screen

const bar = document.getElementById('bar');  // let's target the bar id 
const nav = document.getElementById('navbar'); // let's target the navbar id


//  Now let's check if our navbar is already opened or not or let's check if it's larger or smaller screen

if (bar) { // If any one clicks on bar menu addEventListener that listens to click
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // then we will show the navbar, to do that we add a classList(any name) that we can style in our CSS 
    });
}


// This is for our close(X) button
const close = document.getElementById('close');

if (close) { // If any one clicks on close button it will remove the active status
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // then we will show the navbar, to do that we add a classList(any name) that we can style in our CSS 
    });
}

// This is for our close(X) button
const cart = document.getElementById('cart');
const mobile = document.getElementById('mobile');



