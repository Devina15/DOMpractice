
//manipulating the title of the page
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = "Hello";

//creating a black border for header title using getElementById
var header = document.getElementById('main-header');
header.style.border = "solid 3px #000";

//manipulating color and fontWeight for for title using getElementsByClassName
var abc = document.getElementsByClassName('title');
abc[0].style.fontWeight = 'bold';
abc[0].style.color = 'green';
