var tired = true;
var bored = false;
var nap = function() {
  if(tired || bored){
      return true;
  }
  else{
      return false;
  }
}
