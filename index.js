// Answer to question 3.

function subjectToTake(classGroup)
{
    let studentSubjects
    let newLine = '\n';
    let artsSubjects = `Government${newLine}Economics${newLine}Literature${newLine}History${newLine}`;
    let socialScienceSubjects = `Accounting${newLine}Commerce${newLine}Marketing${newLine}Geography${newLine}`;
    let scienceSubjects = `Physics${newLine}Chemistry${newLine}Biology${newLine}Technical Drawing${newLine}`; 
    let generalSubjects = `English${newLine}Mathematics`;

    if(classGroup === "art" || classGroup === "Art" || classGroup === "ART" ){
        studentSubjects = artsSubjects + generalSubjects;
    }
    else if(classGroup === "social science" || classGroup === "Social science" || classGroup === "Social Science" || classGroup === "SOCIAL SCIENCE"){
        studentSubjects = socialScienceSubjects + generalSubjects;
    }
    else if(classGroup == "science" ||  classGroup === "Science" || classGroup == "SCIENCE"){
        studentSubjects = scienceSubjects + generalSubjects;
    }
    else{
        studentSubjects = generalSubjects;
    }
    return(`Here are the subjects you will be taking:${newLine + studentSubjects}`);
}

console.log(subjectToTake("Social science"));


// Answer to question 5.        
function nearestPowerOfTwo(num)
{
    let result1 = 0n;
    let multiplier1 = 2
    let beforeNum = 0;
    let afterNum = 0;
    let pwr = 0n;
    for(let index = 0; index <= num; ++index)
    {
        result1 = multiplier1 ** index;
        beforeNum = result1 / 2;
        afterNum = result1 * 2;
        if (result1 === num)
        {
            if((num - beforeNum) <= (afterNum - num)){
                pwr = beforeNum;
            }
            else{
                pwr = afterNum;
            }
            break;
        }
        else if (result1 > num)
        {
            if((num - beforeNum) <= (result1 - num)){
                pwr = beforeNum;
            }
            else{
                pwr = result1;
            }
            break;
        }
    }
    return(pwr);
}

console.log(nearestPowerOfTwo(40));
console.log(nearestPowerOfTwo(50));
console.log(nearestPowerOfTwo(3));


// test code
// for (let index = 10; index <= 20; index++) {
//     console.log('index is ' + index + ' nearest power is ' + nearestPowerOfTwo(index));
// }
//Wrough work.
/*function isPowerOfTwo(num1)
{
    let multiplier = 2;
    let result;
    for(let i = 0; i <= num1; ++i)
    {
        result = multiplier ** i;
        console.log(result);
        if( result === num1 )
        {
            return(num1 + ' is a power of 2.');
        }
        else if (result > num1)
        {
            return(num1 + ' is not a power of 2.');
        }
        result = 0;
    }
}
console.log(isPowerOfTwo(50)); */