let leapYear = ()=>{
let year = parseInt(document.getElementById('yearID').value);
let value;


  if(year % 4 === 0 && year % 100 === 0 ){
    if(year % 400 === 0){
      value = year +" is a leap year 😉";
    }else{
      value = year +" is not a leap year 😐";
    }
  }else if(year % 4 === 0){
      value = year + " is a leap year 😉";

  }else{
      value= year +" is not a leap year 😐";
  }
  document.getElementById('result').innerHTML = value;
}


document.querySelector('button').addEventListener("click",()=>{
  leapYear();
});