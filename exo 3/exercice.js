let libButton = document.getElementById('lib-button');

let libIt = function() {
    let inputNoun = document.getElementById('noun');
    let inputAdj = document.getElementById('adjective');
    let person = document.getElementById('person');
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = inputNoun.value + " " + inputAdj.value + " " + person.value;
};

libButton.addEventListener('click', libIt);

console.log(typeof inputNoun);
console.log(typeof inputAdj);
console.log(typeof person);











