
function onEdit(e){
  var range = e.range;
  if (range.getValue().toLowerCase() == "first last" || range.getValue().toLowerCase() == "first"){
        range.setValue("First Last")
  }
  else if (range.getValue().toLowerCase() == "first1 last1" || range.getValue().toLowerCase() == "first1"){
        range.setValue("Something funny")
  }
  else if (range.getValue().toLowerCase() == ""){
        range.setValue("")//blank to blank
  }
  else{
        range.setValue("default value")
  }
}
