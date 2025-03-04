const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;

const EMPLOYEE_WORK_DAYS = [
    { day: 1, hours: 8 },
    { day: 2, hours: 4 },
    { day: 3, hours: 8 },
    { day: 4, hours: 8 },
    { day: 5, hours: 4 },
    { day: 6, hours: 8 },
    { day: 7, hours: 0 } 
];

// Helper function to calculate daily wage
const calcDailyWage = (hours) => hours * WAGE_PER_HOUR;

// a. Calculate total wage
const totalWage = EMPLOYEE_WORK_DAYS
    .map(emp => calcDailyWage(emp.hours))
    .reduce((total, wage) => total + wage, 0);

console.log("Total Wage: ", totalWage);

// Day along with Daily Wage using Map
const dayWithWages = EMPLOYEE_WORK_DAYS.map(emp => 
    `Day ${emp.day}: ${calcDailyWage(emp.hours)}`
);
console.log("Day with Wages:", dayWithWages);

//Full time wage of 160 was earned
const fullTimeDays = EMPLOYEE_WORK_DAYS
    .filter(emp => calcDailyWage(emp.hours) === 160)
    .map(emp => emp.day);
console.log("Days with Full Time Wage (160):", fullTimeDays);

//first occurrence when Full Time Wage was earned
const firstFullTimeDay = EMPLOYEE_WORK_DAYS.find(emp => calcDailyWage(emp.hours) === 160);
console.log("First Day with Full Time Wage:", firstFullTimeDay ? firstFullTimeDay.day : "None");

// Full Time Wage is truly holding Full time wage
const isAllFullTime = EMPLOYEE_WORK_DAYS.every(emp => emp.hours === FULL_TIME_HOURS);
console.log("All days Full Time?:", isAllFullTime);

//  any Part Time Wage
const hasPartTime = EMPLOYEE_WORK_DAYS.some(emp => emp.hours === PART_TIME_HOURS);
console.log("Is there any Part Time Wage?:", hasPartTime);

// number of days Worked
const workDays = EMPLOYEE_WORK_DAYS.filter(emp => emp.hours > 0).length;
console.log("Number of Days Worked:", workDays);
