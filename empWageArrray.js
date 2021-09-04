const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const  MAX_HOURS_IN_MONTH = 160;

function getWorkingHours(empCheck){
    switch(empCheck){
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    default:
        return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHours <= MAX_HOURS_IN_MONTH &&
      totalWorkingDays <= NUMBER_OF_WORKING_DAYS){
      totalWorkingDays++;  
      let empCheck = Math.floor(Math.random() * 10);
      let empHrs = getWorkingHours(empCheck);
      totalEmpHours += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
        }

let  empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("UC 6: " + "\n" +
            "Total days: " + totalWorkingDays + "\n" +
            "Total Hours: " + totalEmpHours + "\n" +
            "Emp Wage: " + empWage);
//console.log("Daily wage array: " + empDailyWageArr);

//Array Helper Functions
let totEmpWage = 0;
empDailyWageArr.forEach(sum);
function sum(dailyWage){
    totEmpWage += dailyWage;
}

console.log("UC 7A: " + "\n" +
            "Total days: " + totalWorkingDays + "\n" +
            "Total Hours: " + totalEmpHours + "\n" +
            "Emp Wage: " + totEmpWage);

function sumTwo(totalEmpWage, num){
    return totalEmpWage + num;
}

var total = empDailyWageArr.reduce(sumTwo);
console.log("UC 7B: " + "\n" +
            "Total days: " + totalWorkingDays + "\n" +
            "Total Hours: " + totalEmpHours + "\n" +
            "Emp Wage: " + total);
