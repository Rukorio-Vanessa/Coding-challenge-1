# Coding-challenge-1

### Author : Vanessa Rukorio 28/11/12

## Project Description
### Code Challenges 
* Challenge 1: Student Grade Generator (Toy Problem)
  Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

* Challenge 2: Speed Detector (Toy Problem)
  Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
  For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 

* Challenge 3: Net Salary Calculator (Toy Problem)
  Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

## Code challenge Solutions
* Challenge 1:
  - npm install prompt-sync: run on the terminal in order to be able to us the prompt command to prompt the user to enter the grade.
  function gradingOfResults(gradePercentage){
  while (gradePercentage >= 0 && gradePercentage <= 100){}
  } //returns a grade A, B, C, D OR E depending on the grade percentage input(between 0 &100)

* Challenge 2: 
   - function speedLimit(speed){}
   //the `speedlimit` returns 'ok' if speed is less than 70
   - print("Points:"+ ((speed-70)/5));
   //the speed limit is greater than 70
   prints 'License suspended' if points exceed 12

* Challenge 3:
   -  function monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances){}
   // `monthlyGrossSalary` returns the value of the gross salary with input value of basic salary and benefits and allowances
   -  function monthlyPayeRate(monthlyBasicSalary){}
   `monthlyPayeRate` returns the PAYE tax on the basic salary
   -  const monthlyNhifDeduction = (monthlyGrossSalary) => {} 
   `monthlyNhifDeduction` returns value of NHIF deductions on the grossmonthlysalary given certain conditions
   -  const monthlyNssfDeductions = 200
   `monthlyNssfDeductions` returns the value of 200/= as the nssf deduction
   -  function monthlyNetSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances){}
   `monthlyNetSalary` returns the Net Salary given the monthlyBasicSalary and monthlyBenefitsAndAllowances, and by calling the previously defined functions
   Net Salary = monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances) - monthlyPayeRate(monthlyBasicSalary) - monthlyNhifDeduction(monthlyGrossSalary(monthlyBasicSalary, monthlyBenefitsAndAllowances)) - monthlyNssfDeductions

### Requirements
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)
* [Testing Platform](Platform URL)



## Dependencies
- package.json
- package-lock.json

## Technologies Used
1. Javascript

## Contact Information
* Email : vanessa.kirangari@moringaschool.com