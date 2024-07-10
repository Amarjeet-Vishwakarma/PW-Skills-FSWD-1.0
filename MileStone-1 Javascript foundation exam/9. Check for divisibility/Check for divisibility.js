let array =[27, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < array.length; i++){
    let num = array[i];

    if(num % 2 === 0){
        continue;
    }
    if(num % 3 === 0 ){
        console.log(num);
    }
}