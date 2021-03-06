// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
};

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) 
      onePep.style.visibility = 'visible';
     else 
      onePep.style.visibility = 'hidden';
  })};
  


function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom=> {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
};
  // Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onegreenPep => {
    if (state.greenPeppers) {
      onegreenPep.style.visibility = 'visible';
    } else {
      onegreenPep.style.visibility = 'hidden';
    }
  });
};
  // Iteration 1: set the visibility of `<section class="green-pepper">`


function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(onesauce => {
    if (state.whiteSauce) {
      onesauce.style.visibility = 'visible';
    } else {
      onesauce.style.visibility = 'hidden';
    }
  });
};
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderGlutenFreeCrust() {
    if (state.glutenFreeCrust) {
      document.querySelector('.crust').classList.add('crust-gluten-free')
    }
    else {
      document.querySelector('.crust').classList.remove('crust-gluten-free')
    }
  };

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


function renderButtons() {
  if (state.pepperoni) 
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
     else 
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
  if(state.mushrooms)
  document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    else
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
   if(state.mushrooms)
  document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    else
    document.querySelector('.btn.btn-green-peppers').classList.add('active');  
   if(state.mushrooms)
  document.querySelector('.btn.btn-sauce').classList.remove('active');
    else
    document.querySelector('.btn.btn-sauce').classList.add('active');
  if(state.mushrooms)
  document.querySelector('.btn.btn-crust').classList.remove('active');
    else
    document.querySelector('.btn.btn-crust').classList.add('active');  
};

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


  function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
  
    let totalPrice = 10
    let $list = document.querySelector('aside.panel.price ul')
    $list.innerHTML = ""
  
    for (let items in ingredients) {
      if (state[items]) {
        totalPrice += ingredients[items].price
        $list.innerHTML += `<li>$${ingredients[items].price} ${ingredients[items].name.toLowerCase()}</li>`
      }
    }
    document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice
  }
  // Iteration 4: change the HTML of `<aside class="panel price">`


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () =>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
});