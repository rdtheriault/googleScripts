function myFunction(e) {
  //var source = SpreadsheetApp.openById("xxxxxxxx");
  var counter = 0;
  var destination = SpreadsheetApp.getActiveSpreadsheet();
  var cell = destination.getcell(counter,0);
  
  while (!cell.isBlank()) {
    var stuName = cell.getvalue();
    
    try { 
      var copySheet = destination.getSheetByName("Template");
      copySheet.copyTo(destination).setName(stuName);
      destination.setName(stuName);      
    } 
    catch(err){  
      SpreadsheetApp.flush(); 
    }
  }
  counter++;
  cell = destination.getCell(counter,0);
}

//destination.deleteActiveSheet(); 
//destination.setActiveSheet(copySheet); 
