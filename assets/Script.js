// GET jQuery ready //
$(document).ready(function () {
    // Declare our time and date 
    var todayDate = moment().format('ddd MMM Do YYYY');

    // Necessary DOM Elments //
    var currentDayEl = $("#currentDay");
    var saveBtn = $(".saveBtn");

    // Declare global Variables //
    var timeEntered, textEntered;

    // Place Current date to Jumbotron //
    currentDayEl.text(todayDate);


    // localStorage Cycle //
    for (var i = 9; i <= 17; i++) {
        var storageItems = localStorage.getItem(i);
        if(storageItems != null){
            $('.timeBlocks').each(function(){
                if($(this).attr('value') == i){
                    $(this).next().text(storageItems);
                    $(this).next().addClass('active')
                }
            });
        }        
    }

    // What happend when you clicks on saveBtn //
    saveBtn.on("click", function (event) {
        event.preventDefault();
        var inputBox = $(this).prev().val();
        var timeSlot = parseInt(($(this).prev().prev().attr("value")));
        $(this).prev().addClass('active')
        textEntered = inputBox;
        timeEntered = timeSlot;
        localStorage.setItem(timeEntered, textEntered);
    })

})




