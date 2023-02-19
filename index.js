// Answer to question 5.

// function isPowerOfTwo(num1)
// {
//     let multiplier = 2;
//     let result;
//     for(let i = 0; i <= num1; ++i)
//     {
//         result = multiplier ** i;
//         console.log(result);
//         if( result === num1 )
//         {
//             return(num1 + ' is a power of 2.');
//         }
//         else if (result > num1)
//         {
//             return(num1 + ' is not a power of 2.');
//         }
//         result = 0;
//     }
// }

//console.log(isPowerOfTwo(50));


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
        if (result1 === num)
        {
            beforeNum = result1 / 2;
            afterNum = result1 * 2;
            if((num - beforeNum) <= (afterNum - num))
            {
                pwr = beforeNum;
            }
            else
            {
                pwr = afterNum;
            }
            break;
        }
        else if (result1 > num)
        {
            beforeNum = result1 / 2;
            if((num - beforeNum) <= (result1 - num))
            {
                pwr = beforeNum;
            }
            else
            {
                pwr = result1;
            }
            break;
        }

    }
    return(pwr);
}

for (let index = 2; index <= 20  ; index++) {
    console.log('index is ' + index + ' nearest power is ' + nearestPowerOfTwo(index));
}

// console.log(5);