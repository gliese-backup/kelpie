/* API Endpoints
 * breeds list: https://dog.ceo/api/breeds/list/all
 * get single breed image: https://dog.ceo/api/breed/{breed}/images/random
 */

// This function returns [breeds]
function getDogsBreed() {
  return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((err) => console.log(err));
}

getDogsBreed();
