const addWord = document.querySelector('#addWord');
const submitWord = document.querySelector('#submitWord');
const findWord = document.querySelector('#findWord');
const submitFind = document.querySelector('#submitFind');
const paraAdd = document.querySelector('#resultWord'); 
const paraFind = document.querySelector('#resultFind');
const resetButton = document.querySelector('#reset');
const words = [];
submitWord.addEventListener('click', addToDictionary);
submitFind.addEventListener('click', findInDictionary);
resetButton.addEventListener('click', resetDictionary);

function addToDictionary() {
    let inputText = String(addWord.value).toLowerCase();
    if (words.indexOf(inputText) == -1 && inputText !== "") {
        words.push(inputText);
        paraAdd.textContent = "Added to the dictionary.";
        paraAdd.style.backgroundColor = 'green';
    } else {
        alert("This word exists");
        paraAdd.textContent = "";
    }
}

function findInDictionary() {
    let inputText = String(findWord.value).toLowerCase();
    if (words.indexOf(inputText) !== -1) {
        paraFind.textContent = `Found word "${inputText}" in the dictionary.`;
        paraFind.style.backgroundColor = 'green';
    }else {
        paraFind.textContent = `Word "${inputText}" is not in the dictionary.`;
        paraFind.style.backgroundColor = 'red';
    }
}

function resetDictionary() {
    location.reload();
    return false;
}