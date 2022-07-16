console.log("hello world");
// square
let Square = document.getElementById("Square");
// console.log(Square);
Square.addEventListener('click', function(){
    // console.log("click is done")
    let input = document.getElementById("text")
    let inputVal =( input.value * input.value);
    
    // console.log(inputVal)

    let h = document.getElementById("answer")
    let html = `<h1>${input.value}&#178 =  ${inputVal}</h1>`
    h.innerHTML = html
})

// cuber

let cube = document.getElementById("cube");
// console.log(Square);
cube.addEventListener('click', function(){
    // console.log("click is done")
    let input = document.getElementById("text")
    let inputVal =( input.value * input.value * input.value);
    
    // console.log(inputVal)

    let h = document.getElementById("answer")
    let html = `<h1>${input.value}&#179  =  ${inputVal}</h1>`
    h.innerHTML = html
})
