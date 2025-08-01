const count = document.querySelector('#counter');

// // let Increment = () => {}
// function Increment() {

//     // fetches the data from count in form of string 
//     // parseInt covert string to int value
//     let value = parseInt(count.innerText);

//     // updating value 
//     value = value + 1;

//     // update value in ui
//     count.innerText = value;
// }


// // let Decrement = () => {}
// function Decrement() {
//     // fetches the data from count in form of string 
//     // parseInt covert string to int value
//     let value = parseInt(count.innerText);

//     // updating value 

//     // update value in ui
//     value = value - 1;
//     count.innerText = value;
// }



let incrBtn = document.getElementById("increment");
let decrBtn = document.getElementById("decrement");

incrBtn.addEventListener('click', function Increment() {

    let value = parseInt(count.innerText);
    count.innerText = value + 1;
});


decrBtn.addEventListener('click', function Decrement() {

    let value = parseInt(count.innerText);
    count.innerText = value - 1;
});
