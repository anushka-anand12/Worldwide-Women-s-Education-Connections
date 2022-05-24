var button = $('.submit-button')

button.on("click", addInfo)

var results = $('.results-container');

function addInfo(){  
  event.preventDefault()
  var nameInput = $('.name-input').val();
  results.append(`<p>${nameInput}, thank you for donating to the Worldwide Women's Education Connections!</p>`);
  }


 