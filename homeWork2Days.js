//Asal Sayı Bulma 

function findPrime(...numbers)  {
    for (let i = 0; i< numbers.length; i++) {
      
       let sayac = 0
       for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
            sayac++;
          }        
       }
       if (numbers[i] == 1) {
           console.log(numbers[i] + " " + "Asal Sayı Değildir")
       }
       else if (numbers[i] > 1, sayac == 0 ) {
           console.log(numbers[i] + " "+ "Asal Sayıdır")
       }
       else ( console.log (numbers[i] +" " + "Asal Sayı Değildir" ))
    }

}

findPrime(1,2, 5, 8, 21, 17, 25, 31, 11, 13,135 , 23423469) 
