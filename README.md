# Coding-challenge-1

## General Description
Week one coding challenges using JavaSript

## Getting Started
* To use the content in the repository ensure you have
 - A computer that runs on either: Windows 7+, Linux, Mac OS
 - node 9.0+

## Installation
To use this repository on your machine carry out the following steps:

* Open your terminal

* Clone the reository using:
   https://github.com/Rukorio-Vanessa/Coding-challenge-1.git

* Now, change your directory to the new repository folder using:
   cd Coding-challenge-1

* To open in vs code use:
   code .   

## Running the Project
The following can be used to run the program:
* Install dependencies from npm
  - npm install
* To run the program use:
  - npm start       
* To be able to run the prompt command install:
  -npm install prompt-sync  

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


## Dependencies
- package.json

## Technologies Used
1. Javascript

## Author 
[Vanessa Rukorio](https://github.com/Rukorio-Vanessa) 

## Contact Information
* Email : vanessa.kirangari@moringaschool.com

## License
The projuct is licensed under ISC
