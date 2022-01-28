// displays current date under main heading
let today = moment();
$("#currentDay").text(today.format("dddd, MMM do, YYYY"));

// save button local storage

$(".time-block").each(function () {
  let saveButton = $(this).find('#saveButton');
  let impValue = $(this).find('#impValue');
  let id = $(this).attr('id');
  
  $(saveButton).click(function () {
    localStorage.setItem(id, impValue.val());
    let saveInput = localStorage.getItem(id)
    console.log(saveInput);
  });
});

// code to push saved storage to text area

$(".time-block").each(function () {
  let impValue = $(this).find('#impValue');
  let id = $(this).attr('id');
  let saveValue = localStorage.getItem(id);
  impValue.val(saveValue);
});

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