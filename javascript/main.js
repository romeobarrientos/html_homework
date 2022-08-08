//EXAMINE THE DOCUMENT OBJECT
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Submit event
form.addEventListener('submit', addItem);


// Add item
function addItem(e){
    e.preventDefault();

// Get input value
var newItem = document.getElementById('item').value;

// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-item';
// Add onclick
li.onclick= function() {remove(this)};
// Add text node with input
li.appendChild(document.createTextNode(newItem));
itemList.appendChild(li);

}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

//Remove item from list
async function remove(el) {
    var element = el;
    element.style.setProperty("text-decoration", "line-through");
    await delay(1000);
    element.remove();
  }
