

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




// Singleproduct.html 
// now let's change the small images show as a big image onclick

var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function () {
        mainimg.src = smallimg[i].src;
    
    }
}

// CART/SHOP PAGE


var removeCartItemButtons = document.getElementsByClassName('cart-remove');
console.log(removeCartItemButtons);

for (var i=0; i<removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateCartTotal();

    })

    var quantityInput = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }

    // var addToCartButtons = document.getElementsByClassName('add-to-cart');
    // for (var i = 0; i < addToCartButtons.length; i++) {
    //     var button = addToCartButtons[i];
    //     button.addEventListener('click', addToCartClicked);
    // }
}

// function addToCartClicked(event) {
//     var button = event.target; 
//     var shopItem = button.parentElement.parentElement;
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
//     var price = shopItem.getAttributeNames('price')[0].innerText;
//     console.log(price, title);
     
// }

function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function updateCartTotal () {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i=0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var totalPrice = cartRow.getElementsByClassName('cart-total')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        totalPrice.innerText = '$' + (price * quantity);
        total = total + (price * quantity);
    
    }
    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

