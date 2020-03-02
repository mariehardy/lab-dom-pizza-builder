// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green peppers', price: 1 },
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
      $whiteSauce.classList.add('sauce-white');
    } else {
      $whiteSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach($glutenFreeCrust => {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      $glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 
  // HENDRIK'S TOGGLE
  // document.querySelectorAll('.btn')[0].classList.toggle('active');


  // FRANCESCO'S SOLUTION

  document.querySelectorAll('.btn.btn-pepperoni').forEach($btn => {
  if (state.pepperoni) {
    $btn.classList.add('active');
  } else {
    $btn.classList.remove('active');
  }
});

document.querySelectorAll('.btn.btn-mushrooms').forEach($btn => {
  if (state.mushrooms) {
    $btn.classList.add('active');
  } else {
    $btn.classList.remove('active');
  }
});

document.querySelectorAll('.btn.btn-green-peppers').forEach($btn => {
  if (state.greenPeppers) {
    $btn.classList.add('active');
  } else {
    $btn.classList.remove('active');
  }
});

document.querySelectorAll('.btn.btn-sauce').forEach($btn => {
  if (state.whiteSauce) {
    $btn.classList.add('active');
  } else {
    $btn.classList.remove('active');
  }
});

document.querySelectorAll('.btn.btn-crust').forEach($btn => {
  if (state.glutenFreeCrust) {
    $btn.classList.add('active');
  } else {
    $btn.classList.remove('active');
  }
});
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // Clears the price list each time a button is clicked
  let priceList = document.querySelector('.panel.price ul')
  priceList.innerHTML = ""
  console.log(priceList)
  let totalPrice = 10
  let totalPriceEl = document.querySelector('.panel.price strong')


  if (state.pepperoni) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name} `
    priceList.appendChild(listItem)
    totalPrice += ingredients.pepperoni.price
  } 

  if (state.mushrooms) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name} `
    priceList.appendChild(listItem)
    totalPrice += ingredients.mushrooms.price
  } 

  if (state.greenPeppers) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name} `
    priceList.appendChild(listItem)
    totalPrice += ingredients.greenPeppers.price
  } 

  if (state.whiteSauce) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name} `
    priceList.appendChild(listItem)
    totalPrice += ingredients.whiteSauce.price
  } 

  if (state.glutenFreeCrust) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name} `
    priceList.appendChild(listItem)
    totalPrice += ingredients.glutenFreeCrust.price
  } 

  totalPriceEl.innerHTML = totalPrice

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
  renderEverything();
};