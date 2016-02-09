function sexy_prime(x, y){
    if((x > 1 && x % 2 !== 0) && 
      (y > 1 && y % 2 !== 0) && 
      (x % 3 !== 0 && y % 3 !== 0)){
        if(y - x == 6 || x - y == 6){
          return true;
        }
        else return false;
    }
    else return false;
}
sexy_prime(5, 11); // true
sexy_prime(5, 12); // false