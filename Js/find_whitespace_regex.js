function ghostBusters(building) {
   if(hasWhiteSpace(building) === false) {
     return "You just wanted my autograph didn't you?";
   }
   else
   return building.replace(/ /g,'');
}
function hasWhiteSpace(building) {
  return building.indexOf(' ') >= 0;
}
ghostBusters("Bus Station");