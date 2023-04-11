
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


//changes made to the list 
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';

//editing new li element with class name
//gives error since no className provided
//var li1 = document.getElementsByClassName('list-group-item');
//li1[4].style.color = 'blue';

// editing 
var li2 = document.getElementsByTagName('li');
li2[4].style.fontFamily = 'Cursive';
li2[4].style.color = 'red';
