//GET Request
function getDogBreeds(dogBreed) {
    console.log(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => showResults(responseJson))
        .catch(error => alert("Something's gone wrong, try again later."));
}

//Displays The Results
function showResults(responseJson) {
    console.log(responseJson.message);
    if(responseJson.message == "Breed not found") {
        $('.results').append(`<p>Breed not found, please try again<p>`);
    }
    else {
        $('.results').append(`<h2>So cute!</h2>
        <img src="${responseJson.message}" class="result-img">`);
    }
    $('.results').removeClass('hidden');
}

//Event Listener On Form Submission
function watchForSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        let dogBreed = $('.js-breed-input').val();
        $('.results').empty();
        getDogBreeds(dogBreed);
    });
}

//Triggers Initial Console Message
function main() {
    console.log('App is all loaded and waiting.');
    watchForSubmit();
}

$(main);