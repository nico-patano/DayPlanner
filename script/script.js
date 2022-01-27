// displays current date under main heading
let today = moment();
 $("#currentDay").text(today.format("dddd, MMM do, YYYY"));
//


// save button

let saveButton = document.getElementById("saveButton");
let impValue = document.getElementById("impValue");

saveButton.onclick = function () {

  let value = impValue.value;
  alert(value);
 

};
//




