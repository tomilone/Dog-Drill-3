function getDogImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
})

  .then(responseJson => 
      displayResults(responseJson))
  .catch(error => alert('Breed Not Found'));

}
    
  
  function displayImages(responseJson, x){
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
    formWatch();
}

$(appRunner);