//Qs.1
//to prompt a user to enter a number between 0 and 100
const prompt=require("prompt-sync")({sigint:true})
prompt("enter a number between 0 and 100: ")
//a function for grading results as:(A, B, C, D, E) depending on the score/percentage
//the vallues need to be between 0 and 100 for a function to run and output a grade
function gradingOfResults(gradePercentage){
while (gradePercentage >= 0 && gradePercentage <= 100){
if (gradePercentage >= 79)
    {
        grade = 'A';
    }
    else
    {
        if (gradePercentage >= 60 && gradePercentage <= 79)
        {
            grade = 'B';
        }
        else
        {
            if (gradePercentage >= 49 && gradePercentage <= 59)
            {
                grade = 'C';
            }
            else
            {
                if (gradePercentage >= 40 && gradePercentage <49)
                {
                    grade = 'D';
                }
                else
                {
                    grade = 'E';
                }
            }
        }
    }
    return `Grade: ${grade}`
} 
}   
//confirming function works as intended
console.log(gradingOfResults(90))

//Qs.2

function print(value){
    console.info(value)
} 
//input speed of a car
//speed limit is 70-print 'ok'
//if speed limit is passed,for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
//if  more than 12 points, the function should print: “License suspended”.
function speedLimit(speed){
    if(speed < 70){
    print('OK')
    }
    else
    {
    print("Points:"+ ((speed-70)/5));

    if(((speed-70)/5) > 12)

    print('License suspended')
    }
}
//confirming function works
print (speedLimit(90))

//qs.3
//***Goal is to calcute the monthly net salary-final salary after benefits are added, and taxes and deductables removed
//monthly gross salary given basic salary and benefits/asllowances
function monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances){
    monthlyGross = monthlyBasicSalary + monthlyBenefitsAndAllowances
    return monthlyGross
}
//confirming gross salary function works!
console.log(monthlyGrossSalary(100000, 40000))

//calculating the monthly PAYE(tax) while taking into account the basic salary
function monthlyPayeRate(monthlyBasicSalary){
    if (monthlyBasicSalary > 32333){
        monthlyPaye = monthlyBasicSalary * 30/100
        return monthlyPaye
    }
    else{
        if(monthlyBasicSalary >=24001 && monthlyBasicSalary <=32333){
            monthlyPaye = monthlyBasicSalary * 25/100
            return monthlyPaye
        }
        else{
            monthlyPaye = monthlyBasicSalary * 20/100
            return monthlyPaye
        }
    }
}
//confirming my PAYE function gives the correct output given the conditions
console.log(monthlyPayeRate(100000))

//giving the monthly NHIF deductions based on the anount og gross salary earned 
const monthlyNhifDeduction = (monthlyGrossSalary) => {
    if (monthlyGrossSalary <= 5999) {
        return 150
    }
    else if (monthlyGrossSalary <= 7999) {
        return 300
    }
    else if (monthlyGrossSalary <= 11999) {
        return 400
    }
    else if (monthlyGrossSalary <= 14999) {
        return 500
    }
    else if (monthlyGrossSalary <= 19999) {
        return 600
    }
    else if (monthlyGrossSalary <= 24999) {
        return 750
    }
    else if (monthlyGrossSalary <= 29999) {
        return 850
    }
    else if (monthlyGrossSalary <= 34999) {
        return 900
    }
    else if (monthlyGrossSalary <= 39999) {
        return 950
    }
    else if (monthlyGrossSalary <= 44999) {
        return 1000
    }
    else if (monthlyGrossSalary <= 49999) {
        return 1100
    }
    else if (monthlyGrossSalary <= 59999) {
        return 1200
    }
    else if (monthlyGrossSalary <= 69999) {
        return 1300
    }
    else if (monthlyGrossSalary <= 79999) {
        return 1400
    }
    else if (monthlyGrossSalary <= 89999) {
        return 1500
    }
    else if (monthlyGrossSalary <= 99999) {
        return 1600
    }
    else {
        return 1700
    }
}
//confirming the code returns the correct output
console.log(monthlyNhifDeduction(monthlyGrossSalary(100000, 40000)))

//the monthly NSSF deductions is a constant 200/=
const monthlyNssfDeductions = 200

//Finally calculating the net salary by calling the already defined functions
//i.e Net Salary= Gross salary - paye - all other deductions
function monthlyNetSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances){
    netSalary = monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances) - monthlyPayeRate(monthlyBasicSalary) - monthlyNhifDeduction(monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances)) - monthlyNssfDeductions
    return `Net Salary: ${netSalary}`
}
//confirming I can get the net salary by inputing th basic salary and benefits
console.log(monthlyNetSalary(100000, 40000))

