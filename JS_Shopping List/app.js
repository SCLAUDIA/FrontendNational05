

let shoppingInput = document.querySelector('#shoppingInput');
let btn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let list = document.querySelector('ul');
let listItems = document.querySelectorAll('li');                             
                              
          
//   create a new shopping item
    
    btn.addEventListener('click',function() {
    let shoppingItem = shoppingInput.value;
    let newItem = document.createElement('li');
    document.getElementById("shoppingInput").value = '';
    newItem.className = 'shopping-list-item';
    newItem.innerHTML = `${shoppingItem} <button class="removeBtn" id="removeBtn">Mark as buyed</button>`;
    // newItem.innerHTML = shoppingItem;
    list.insertBefore(newItem, list.hasChildNodes[0]);
    shoppingItem.value = '';
    })


    shoppingInput.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("addBtn").click();
        }
      });


for(var i=0; i < listItems.length; i++){
    listItems.value = '';
}

let shoppingList = document.querySelector('.card-action');
shoppingList.addEventListener("click", markAsBuyed);
// console.log(shoppingList);
function markAsBuyed(e){
// console.log(e.target);
if(e.target.classList.contains("removeBtn")){
    console.log(e.target.parentNode);
        const listItem = e.target.parentNode;
        listItem.style.textDecoration = "line-through";
}
}


	


