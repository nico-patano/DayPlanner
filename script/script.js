// displays current date under main heading
let today = moment();
$("#currentDay").text(today.format("dddd, MMM do, YYYY"));
//

// save button local storage

$(".time-block").each(function () {
let saveButton = $(this).find('#saveButton');
let impValue = $(this).find('#impValue');

$(saveButton).click(function () {
  
  localStorage.setItem("mycat","kai")
  console.log(impValue);
}) 
localStorage.getItem(9);
localStorage.getItem(10);
localStorage.getItem(11);
localStorage.getItem(12);
localStorage.getItem(13);
localStorage.getItem(14);
localStorage.getItem(15);
localStorage.getItem(16);
localStorage.getItem(17);
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