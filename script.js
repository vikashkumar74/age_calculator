const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(months);

// current date
const date = new Date();

let CurrentDay = date.getDate();
let CurrentMonth = date.getMonth() + 1;
let CurrentYear = date.getFullYear();
console.log(CurrentYear);
console.log(day, CurrentMonth, year);

// click event

document.querySelector(".btn").addEventListener("click", function () {
  const BirthDay = Number(document.querySelector("#day").value);
  const BirthMonth = Number(document.querySelector("#month").value);
  const BirthYear = Number(document.querySelector("#year").value);
  if (!BirthDay || !BirthMonth || !BirthYear) {
    alert("please enter  valid Date");
  } else if (
    (BirthYear >= 1000 &&
      BirthYear < CurrentYear &&
      BirthMonth >= 1 &&
      BirthMonth <= 12 &&
      BirthDay >= 1 &&
      BirthDay <= 31) ||
    (BirthYear >= 1000 &&
      BirthYear == CurrentYear &&
      CurrentMonth >= BirthMonth &&
      BirthMonth >= 1 &&
      BirthMonth <= 12 &&
      BirthDay >= 1 &&
      BirthDay <= 31)
  )  {
    if (BirthMonth >= CurrentMonth) { 
        CurrentYear--;
        let TotalYear = CurrentYear - BirthYear;
        document.querySelector("#yearnum").textContent = TotalYear;
      
      CurrentMonth--;

      let TotalMonth = CurrentMonth + (12 - BirthMonth);

      console.log(TotalMonth);
      document.querySelector("#monthnum").textContent = TotalMonth;
       
    } 
    else if (BirthMonth < CurrentMonth) {
     
        let TotalYear = CurrentYear - BirthYear;
        document.querySelector("#yearnum").textContent = TotalYear;
      
        let TotalMonth = CurrentMonth - BirthMonth;
        document.querySelector("#monthnum").textContent = TotalMonth;
      
    }
    if (BirthDay >= CurrentDay) {
     
        let Totalday = months[BirthMonth - 1] - BirthDay + CurrentDay;
        document.querySelector("#daynum").textContent = Totalday;
      
    } else if (BirthDay < CurrentDay) {
     
        let Totalday = CurrentDay - BirthDay;
        document.querySelector("#daynum").textContent = Totalday;
      }
    
  }
});

