var button = $('.submitt-button')

button.on("click", addInfo)

var results = $('.result-container');

function addInfo() {
  event.preventDefault();
  // var nameInput = $('.name-input').val();

  results.append(`<p>Thank you for submitting the form! It looks like you could benefit from our services. Even if you have a degree, there is always the opportunity to expand your knowledge on a subject or even help someone else with their education!</p>`)
}