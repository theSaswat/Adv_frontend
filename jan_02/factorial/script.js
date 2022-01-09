
function factorial(num) 
{ 

  if (num === 0)
 {
    return 1;
 }
  return num * factorial(num - 1);
         
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let x = document.getElementsByTagName("body")[0];
    x.style.backgroundColor = "#92A8D1";
    let num = document.getElementById("num");
    let result = document.getElementById("result");
    let fact = factorial(num.value);
    result.innerText = fact;
})
