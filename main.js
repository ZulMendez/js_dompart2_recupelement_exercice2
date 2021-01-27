// 1
let premEnf =  document.getElementById('content').firstElementChild;
console.log(premEnf);

// let premierEnfant = document.getElementsByTagName('div')[0]
// console.log(premierEnfant.firstElementChild);

// 2
console.log(document.getElementById('titreNiv3'));

// 3
console.log(document.getElementById('titreNiv3').previousElementSibling);

// 4
console.log(document.querySelectorAll('p')[1].nextElementSibling);

// let exo4 = document.getElementsByClassName('petitParagraphe')[0]
// console.log(exo4.nextElementSibling);

// 5
console.log(document.getElementsByClassName('important')[0].parentElement);

// 6
let myListElement = document.getElementById('listElements').parentElement
let premierEl = myListElement.firstElementChild
console.log(premierEl);

// 7
// console.log(document.getElementsByClassName('important')[3].nextElementSibling);

let exo7 = document.getElementsByClassName('important')
console.log(exo7);
let exo7Longueur = exo7.length -1
let exo7Bis = exo7[exo7Longueur]
console.log(exo7Bis.nextElementSibling);

// 8
let mytextGeneral = document.getElementById('textGeneral')
console.log(mytextGeneral.nextElementSibling.nextElementSibling);

// console.log(document.getElementById('titreNiv3').nextElementSibling);

// 9
let mySpan = document.getElementsByTagName("span")[1];
let spanParent = mySpan.parentElement;
let mySpanPrenom = spanParent.nextElementSibling;
console.log(mySpanPrenom);

// 10
let nicolas = document.getElementsByTagName("b")[2];
let nicolas2 = nicolas.parentElement;
let nicolas3 = nicolas2.parentElement;
let nicolas4 = nicolas3.previousElementSibling;
let nicolas5 = nicolas4.firstElementChild;
let nicolas6 = nicolas5.firstElementChild;
console.log(nicolas6.innerText);
// méthode 2
console.log(document.getElementsByTagName('div')[1].getElementsByTagName('span')[1].firstElementChild.parentElement.parentElement.parentElement.getElementsByTagName('p')[0].firstElementChild.firstElementChild);

// 11
let newMeth = document.querySelector('.grandParagraphe');
console.log(newMeth);

// 12
let newMeth2 = document.querySelectorAll('li');
console.log(newMeth2);
let list = Array.from(newMeth2);
console.log(list);

list.forEach(element => {
    console.log(element);
});