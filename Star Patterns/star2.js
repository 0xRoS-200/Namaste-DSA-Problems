//print this pattern
/* 
* 
* * 
* * * 
* * * *
n = 4
*/
let n = 4;
for(let i = 0; i < n; i++)
{
    let store = ""
    for(let j = 0; j < i+1; j++)
    {
        store += "* ";
    }
    console.log(store);
}