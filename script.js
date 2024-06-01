const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));

// const userName ='vlad'

// function createUserName(name)
// {return name.toUpperCase()}

// const upDatedName = createUserName(userName) //я просто створив змінну в якій помістив значення для легкого написання 

// console.log(upDatedName );


// function declaration(greettings){ // function declaration 
// alert(greettings);
// }

// const expression = function(greettings){//function expression
//   alert(greettings);
// }

// const car={
//   spead: 100,
//   color: 'red',
//   drive: function(){ // це називається методом в донному випадку drive це вже метод
//   console.log('drive very fast')
//   }
// }
// car.drive() //виклик 

