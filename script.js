let count = 0;

fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(json => render(json));



// const render = (json) => {
    
    
    // }
    
function render(json) {
    var mainContainer = document.querySelector('#mainContainer')
    console.log(json)
    console.log(json.products.length)

    for(let i = 0; i < json.products.length; i++){
        var productCards = `<div class="item-container">
        <div class="items">
          <ul>
            <li><i class="fa-solid fa-eye"></i></li>
            <li><i class="fa-solid fa-heart"></i></li>
            <li><i class="fa-solid fa-bars"></i></li>
          </ul>
          <img src="${json.products[i].images[1]}" alt="" />
          <p>
            ${json.products[i].title}
          </p>
          <div class="btn">
            <button id="${count}" class="addToCart">Add To Cart</button>
            <button class="btnDaSecond">Buy Now</button>
          </div>
        </div>
      </div>`

        mainContainer.innerHTML += productCards

        count++;
    }
}

let cartCount = 1;

mainContainer.addEventListener('click', (e) => {

    if(e.target.classList.contains('addToCart')){
        console.log(e.target.id)
        cartBtn.innerHTML = cartCount;
        cartCount++;
    }
}
);