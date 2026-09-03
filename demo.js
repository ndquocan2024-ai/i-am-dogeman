let a = prompt("Enter goalkeeping gloves price a: ", 0)
let b = prompt("Enter goalkeeping gloves price b: ", 0)
let e = prompt("Enter goalkeeping gloves price e: ", 0)
let c = (Number(a) + Number(b) + Number(e)) / 3
console.log(c)
console.log("goalkeeping gloves price")

document.getElementById("kq").innerHTML = "<h1>Total: " + c + " </h1>"
