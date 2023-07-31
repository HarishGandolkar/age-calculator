/************************************/
/* required fields 
/***********************************/

const date = new Date()

let button = document.querySelector('.button')

button.addEventListener('click',()=>{
    let input = document.querySelectorAll('.input-box')
    let month = input[1].value > 12;
    let year = input[2].value > date.getFullYear();
    let days = input[0].value > daysInMonth(input[2].value, input[1].value);
    let field = input[0].value === '';
    for( let i=0;i<input.length;i++){
        if(input[i].value === ''){
            document.querySelectorAll('.text')[i].style.color = 'hsl(0, 100%, 67%)';
            document.querySelectorAll('.input-box')[i].style.borderColor ='hsl(0, 100%, 67%)';
            document.querySelectorAll('.error')[i].classList.toggle('off')
        }
        if(input[1].value > 12){
            document.querySelectorAll('.text')[i].style.color = 'hsl(0, 100%, 67%)';
            document.querySelectorAll('.error1')[1].classList.toggle('off')
            document.querySelectorAll('.input-box')[i].style.borderColor ='hsl(0, 100%, 67%)';
            
        }
        if(input[2].value > date.getFullYear()){
            document.querySelectorAll('.text')[i].style.color = 'hsl(0, 100%, 67%)';
            document.querySelectorAll('.error1')[2].classList.toggle('off')
            document.querySelectorAll('.input-box')[i].style.borderColor ='hsl(0, 100%, 67%)';
            
        }
        if(input[0].value > daysInMonth(input[2].value, input[1].value)){
            document.querySelectorAll('.text')[i].style.color = 'hsl(0, 100%, 67%)';
            document.querySelectorAll('.error1')[0].classList.toggle('off')
            document.querySelectorAll('.input-box')[i].style.borderColor ='hsl(0, 100%, 67%)';
           
        }
        
    }

    if(field === false && days === false && month === false && year === false){
        let yearDifference = yearDiff(input[2].value)
        let monthDifference = monthDiff(input[1].value)
        let dayDifference = dayDiff(input[0].value, daysInMonth(input[2].value,input[1].value))
        document.querySelector('.year').innerHTML = yearDifference
        document.querySelector('.month').innerHTML = monthDifference
        document.querySelector('.day').innerHTML = dayDifference
    }
  
    
})



function daysInMonth(y,m){
    return new Date(y,m,0).getDate();
}

function yearDiff(y){
    let year = date.getFullYear() - y;
    return year
}

function monthDiff(m){
    let month = date.getMonth()+1 - m;
    return month
}

function dayDiff(day, dayInMonth){
    let days = dayInMonth+1 - day;
    return(days)
}