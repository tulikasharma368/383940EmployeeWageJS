const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getEmpWorkingHrs(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
    
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
    
            default:
                return 0;
    }
}

let totalEmpHrs = 0;
for (day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getEmpWorkingHrs(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Employee Total Working Hours: "+totalEmpHrs +" Employee wage: "+empWage);