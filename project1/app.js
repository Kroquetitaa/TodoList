let inputSpanish = document.querySelector('#inputTextSpanish');
let inputEnglish = document.querySelector('#inputTextEnglish');
let inputFrench = document.querySelector('#inputTextFrench');
let divSpanish = document.querySelector('.data__word-spanish');
let divsEnglish = document.querySelector('.data__word-english');
let divsFrench = document.querySelector('.data__word-french');

const addWords = () => {
  let dataSpanish = inputSpanish.value;
  let dataEnglish = inputEnglish.value;
  let dataFrench = inputFrench.value ;
  createParagraph( dataSpanish, dataEnglish, dataFrench );
  
}

const createParagraph = (dataOne, dataTwo, dataThree) => {
  let paragraphOne = document.createElement('p');
  let paragraphTwo = document.createElement('p');
  let paragraphThree = document.createElement('p');
  paragraphOne.innerHTML += dataOne;
  paragraphTwo.innerHTML += dataTwo;
  paragraphThree.innerHTML += dataThree;
  divSpanish.appendChild( paragraphOne );
  divsEnglish.appendChild( paragraphTwo );
  divsFrench.appendChild( paragraphThree );
  // return paragraphOne, paragraphTwo, paragraphThree;
}

let buttonDelete = document.querySelector('#buttonDelete');


const deleteElement = ( ) => {
  divSpanish.remove();
  divsEnglish.remove();
  divsFrench.remove();
}