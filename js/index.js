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
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach($greenPepper => {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = 'visible';
    } else {
      $greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach($whiteSauce => {
    if (state.whiteSauce) {
      document.querySelectorAll('.sauce')[0].classList.add('sauce-white');
    } else {
      document.querySelectorAll('.sauce')[0].classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach($glutenFreeCrust => {
    if (state.glutenFreeCrust) {
      document.querySelectorAll('.crust')[0].classList.add('crust-gluten-free');
    } else {
      document.querySelectorAll('.crust')[0].classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 
  // HENDRIK'S TOGGLE
  // document.querySelectorAll('.btn')[0].classList.toggle('active');


  // MY SOLUTION

//   document.querySelectorAll('button').forEach(btn => {
//     if (btn.classList.contains('active')) {
//       btn.classList.remove('active');
//       console.log(document.querySelectorAll('button.btn') + 'i am in if')
//     } else {
//       btn.classList.add('active');
//       console.log(document.querySelectorAll('button.btn') + 'i am in else')
//     }
//   });
// 

  // FRANCESCO'S SOL

  document.querySelectorAll('.btn.btn-pepperoni').forEach(btn => {
  if (state.pepperoni) {
    btn.classList.add('active');
    console.log(btn + 'state true')
  } else {
    btn.classList.remove('active');
    console.log(btn + 'state false')
  }
});


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // declare variable that points to all the btn with active class

  // document.querySelectorAll('aside.panel price').classList.contains('active')

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  console.log('clicked')
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log('clicked')
  renderEverything();
};