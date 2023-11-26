function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
    return 'This one is on me!'
  } else if(ride >= 400 && ride <= 2000){
      return 'That will be twenty bucks.'
  } else if(ride >= 2500){
    return 'No can do.'
  }
    else{
      return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == 'NYC'? 'Ok, sounds good.': 'No go.'
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(true){
    case tip == 'generous':
      return 'Thank you so much.'
    case tip == 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'

  }
}