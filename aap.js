// console.log ("hello")


var heading = document.querySelector ("#heading")


function increase() {
    
    heading.innerHTML = ++heading.innerHTML

}


function decrease() {
    if (heading.innerHTML > 0) {
        --heading.innerHTML
    }
}

function reset() {
    heading.innerHTML = 0;
}



// var heading = document.querySelector("#heading");

// function increament() {
//     heading.innerHTML = ++heading.innerHTML;
// }

// function decreament(){
//     if(heading.innerHTML > 0){
//         --heading.innerHTML;
//     }   
// }

// function reset(){
//     heading.innerHTML = 0;
// }