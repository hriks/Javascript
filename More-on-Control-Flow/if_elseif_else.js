var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  else if(isNaN(number) === true)
  {
    return "Thats not a number at all return Number please";  
  }
  else 
  {
      return false;
  }
};
