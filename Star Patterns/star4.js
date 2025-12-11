//print this pattern
/* 
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5
n = 5
*/

let n = 5;
for(let i = 0; i < n; i++)
{
    let store = "";
    for(let j = 0; j < i + 1; j++)
    {
        store += (i + 1) + " ";
    }
    console.log(store)
}
