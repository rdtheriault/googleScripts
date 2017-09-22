function myFunction(e) {
  //var source = SpreadsheetApp.openById("xxxxxxxx");
  var counter = 1;
  var destination = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = destination.getSheetByName("List");
  var range = sheet.getRange("A1:A1000");
  var cell = range.getCell(counter,1);
  
  while (!cell.isBlank()) {
    var stuName = cell.getValue();
    
    try { 
      var copySheet = destination.getSheetByName("Template");
      copySheet.copyTo(destination).setName(stuName);     
    } 
    catch(err){  
      SpreadsheetApp.flush(); 
    }
    counter++;
    cell = range.getCell(counter,1);
  }
}

//destination.deleteActiveSheet(); 
//destination.setActiveSheet(copySheet); 
