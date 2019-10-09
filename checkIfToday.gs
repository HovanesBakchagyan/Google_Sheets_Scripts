function checkIfToday(input) {
  var currentDate = new Date;
  Utilities.formatDate(currentDate, "America/Los_Angeles", "MM/dd/yyyy");
  if(currentDate.toString() == input)
    return true;
  else
    return false;
}
