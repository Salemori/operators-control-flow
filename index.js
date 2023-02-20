// Answer to question 3
/*Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies,
 she needs to know the subjects she will be taking as an Arts student.
 All students have to take the General subjects.
	The subjects for each class group are as follows:
	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics

Using if…else conditional statement, write a program that will help Bolatito
 determine the subjects she will be taking for the session using her class group. 
 Also, in the case of an invalid class group, your output should be the General subjects. 
*/
// // Answer to question 4
// for(let i = 1; i < 20; i += 7)
// {
//     console.log(i);
// }

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
            if((num - beforeNum) <= (afterNum - num))
                pwr = beforeNum;
            else
                pwr = afterNum;
            break;
        }
        else if (result1 > num)
        {
            if((num - beforeNum) <= (result1 - num))
                pwr = beforeNum;
            else
                pwr = result1;
            break;
        }
    }
    return(pwr);
}



// test code
// for (let index = 2; index <= 20  ; index++) {
//     console.log('index is ' + index + ' nearest power is ' + nearestPowerOfTwo(index));
// }

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