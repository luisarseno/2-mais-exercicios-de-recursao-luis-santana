function fat(number){
  if(number == 1) return 1;
  return number * fat(number-1);
}

function somatorio(number){
  if(number == 0) {
    return 0;
  }
  return number + somatorio(number-1);
}

function fibo(number){
  if (number <= 2){
    return 1;
  }
  return fibo(number-2) + fibo(number-1);
}

function isPal(string){
  if(string.length <= 1){
    return true;
  }
  if(string[0] == string[string.length -1]){
    return isPal(string.substring(1,string.length-1));
  } 
  return false;
}

function convBase2(number){
  if(number == 1) return 1;
  if(number > 0 && number != 0 && number != 1)
    return convBase2(Math.trunc(number/2)) +""+(number%2);
}

function soma(number, number2){
  if(number == number2){
    return number;
  }
  if(number < number2){
    return number+soma(number+1, number2)
  }
}
