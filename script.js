function getDogImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayImages(responseJson,breed))
    .catch(error => 'Something went wrong! Try again later!')
  }
  
  function displayImages(responseJson, x){
  console.log(responseJson)
  $('.results').html('');
  $('.results').append(`<img src='${responseJson.message}' class='img-results' alt='random dogs'>`)
  
  $('.results').removeClass('hidden');
  }
  
  function formWatch (){
    $('form').submit(event =>{
      event.preventDefault();
      let x = $(`input[class='breed']`).val();
        x.toLowerCase();
      getDogImages(x);
    });
  }
  
function appRunner(){
    console.log('App is loaded, waiting on submit')
    formWatch();
}

$(appRunner);