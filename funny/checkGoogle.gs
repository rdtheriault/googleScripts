function whatDoesGoogleThinkOfMe(name) {
  if (name.toLowerCase() == "first last"){
    return "Talking points go here";
  }
  else if (name.toLowerCase() == "first last2"){
   return "Talking points go here"; 
  }
  else if (name.toLowerCase() == "first last3"){
   return "He is the most bestest awesomest person of ever time!"; 
  }
  else {
    var num = Math.floor(Math.random() * 6); 
    var answer = "";
    if (num === 0){answer = "Meh";}
    else if (num === 1){answer = "You're ight";}
    else if (num === 2){answer = "Done better";}
    else if (num === 3){answer = "Outstanding";}
    else if (num === 4){answer = "Legend... wait for it ... dary, legendary";}
    else if (num === 5){answer = "5";}
    return answer; 
  }
}
//add and change as needed
