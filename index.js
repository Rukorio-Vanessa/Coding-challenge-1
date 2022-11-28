const prompt=require("prompt-sync")({sigint:true})
prompt("enter a number")
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
console.log(gradingOfResults(90))

//qs.2
function print(tag, value){
    console.info(tag, value)
} 
       
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
console.log(speedLimit(90))
