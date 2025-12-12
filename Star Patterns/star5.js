//print this pattern
/* 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
n = 5
*/

let n = 5;
for(let i = n; i > 0; i--)
{
    let store = "";
    for(let j = 1; j <= i; j++)
    {
        store += j + " ";
    }
    console.log(store);
}