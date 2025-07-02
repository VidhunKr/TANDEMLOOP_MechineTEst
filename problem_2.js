function generatePattern(n){
    for(let i=1; i<=n; i++)
    {
        let row = ''
        for(let j=1; j<=n;j++){
            if(i===1) row += j+ ' ' 
            else if(i===n) row += (n-j +1 ) + ' '
            else if (j===i || j===n -i +1) row += j+ ' '
            else row += ''
        }
        console.log(row.trim());
        
    }
}

generatePattern(4)