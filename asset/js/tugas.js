//Bilangan genap dan ganjil
for(a = 1; a<=10; a++){
    if(a % 2 == 0){
        console.log(a, "Bilangan Genap")
    }else{
        console.log(a, "Bilangan Ganjil")
    }
}

//Bilangan fibonacci
const fibo = (n) =>{
    if(n == 0){
        return 0
    }else if(n == 1){
        return 1
    }else{
        return fibo(n-1) + fibo(n-2)
    }
}
for(a = 1; a<=10; a++){
    console.log("Fibonacci dari ", a, " : ", fibo(a))
}
//Bilangan prima
for(a = 2; a<=20; a++){
    mod = 1
    for(b=2; b<a; b++){
        if(a % b == 0){
            mod = 0
        }
    }
    if(mod == 1){
        console.log(a, " bilangan prima")
    }
}