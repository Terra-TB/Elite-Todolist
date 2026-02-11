let task0 = new Task(); 
let task1 = new Task(); 
let task2 = new Task(); 

let list0 = new List("my list");
list0.addTask(task0);
list0.addTask(task1);
list0.addTask(task2);

list0.pushToLocalStorage("1");

list1 = new List("");
list1.getFromLocalStorage("1");
console.log(list1)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
