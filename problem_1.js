function transform(input){
    const reversed= input.split('').reverse()
    let result =''
    for (let char of reversed){
        const code =char.charCodeAt(0)
        // if((char>="A" && char<="Z") || (char>="a" && char<="z")){
        //     const base= char===char.toUpperCase()  ? 155 : 215
        //     result+=String.fromCharCode(base - code)
        // }
        let shifted= String.fromCharCode(code + 5)
        result += shifted
    }
    return result
}

console.log(transform("ABCDEF"));
console.log(transform("abcd"));
