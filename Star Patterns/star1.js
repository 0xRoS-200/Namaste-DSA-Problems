//print this pattern
/* 
* * * *
* * * *
* * * *
* * * *
n = 4
*/
let n = 4;
let storepattern = ""
for(let i = 0; i < n; i++) //outer loop to print rows
{
    for(let j = 0; j < n; j++) //inner for printing patterns
    {
        storepattern += "* "
    }
    console.log(storepattern);
    storepattern = "";
}
