function printNum(x){
    let num = 0;
    if(num >= x) return;
    console.log(num);
    num++;
    printNum(num)
}

printNum(10);