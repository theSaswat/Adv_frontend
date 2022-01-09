let result = document.getElementById('result');
function fizbuz(){
        let num = document.getElementById('num').value
        let x = document.getElementsByTagName("body")[0];
        x.style.backgroundColor = "#92A8D1";
        for(let i = 1; i<=num; i++){
            if(i % 3 ==0 && i % 5 == 0){
                result.innerHTML +=("<br/> FizzBuzz");
            }else if(i % 3 == 0){
                result.innerHTML +=("<br/> Fizz");
            }else if(i % 5 == 0){
                result.innerHTML +=("<br/> Buzz");
            }else{
                result.innerHTML +=("<br/>" + i)
            }
        }
    }
