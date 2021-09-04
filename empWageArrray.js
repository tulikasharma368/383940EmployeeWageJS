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
console.log("Daily wages: " + empDailyWageArr);

function checkTime(empWage){
    return empWage == 160;
}

var fullTimeWage = empDailyWageArr.filter(checkTime);
console.log("Days with full time wage equal to 160: " + fullTimeWage);
