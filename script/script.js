// displays current date under main heading
let today = moment();
$("#currentDay").text(today.format("dddd, MMM do, YYYY"));
//

// save button local storage

$(".time-block").each(function () {
  let saveButton = $(this).find('#saveButton');
  let impValue = $(this).find('#impValue');
  
  $(saveButton).click(function () {
    
    localStorage.setItem('inputBox', impValue.val());
    let saveInput = localStorage.getItem('inputBox')

  });
});

// code to push saved storage to text area



//area color change using jquery

function areaColor() {
  let currentMoment = moment().hours();

  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id"));

    if (blockHour < currentMoment) {
      $(this).addClass("past");
    } else if (blockHour === currentMoment) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
areaColor();