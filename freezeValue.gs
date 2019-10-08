/**
* Allows for the replacement of a formula or cell referance with the value
* that is currently located within the currently active cell.
*
* This function must be called from within a trigger(ie. onEdit,onOpen,Time-driven) 
* in order to ensure that the .copyTo() function is allowed the necessary permissions to run
* otherwise an error will occur.
*/
function freezeValue() {  
  var DestinationRange = SpreadsheetApp.getActive().getSheetByName('Overview').getActiveRange();
  DestinationRange.copyTo(DestinationRange, {contentsOnly:true});
}
