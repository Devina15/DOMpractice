
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

//querySelector
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

//querySelectorAll
var secItem = document.querySelectorAll('.list-group-item');
secItem[2].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0;i<odd.length;i++)
    {
        odd[i].style.backgroundColor = 'green';
    }

//create new div element for text word 'hello' before 'Item Lister'
var newDiv = document.createElement('Div');
newDiv.className = 'Hello';
var newDivText = document.createTextNode('hello');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1); //first 'hello' added

//create new div element for text word 'hello' before 'Item 1'
var newLi = document.createElement('li');
newLi.className = 'list-group-item';
var newLiText = document.createTextNode('hello');
newLi.appendChild(newLiText);
var container = document.querySelector('body .container #main ul');
var li = document.querySelector('body .container #main ul li');
container.insertBefore(newLi,li);

//delete event
itemList.addEventListener('click',removeItem);

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            }
    }
}

//create edit button
var editBtn = document.createElement('button');
//append text node
editBtn.appendChild(document.createTextNode('Edit'));
//append button to li
li.appendChild(editBtn);
