let input = "abcadeecfb";
let a = new Set(input)
console.log(a)
let b = [...a].join('')
console.log(b)



let  c = "abcadeecfb";
let e = c.split("")
let num = new Map()
for(let i=0 ; i<e.length; i++){
    if(num.has(e[i]) == true){
        let value = num.get(e[i])
        num.set(e[i],value+1);
    }
    else{
        num.set(e[i],1)
    }
}
for(let i of num){
    console.log(i[0] + "=" + i[1]);
}





