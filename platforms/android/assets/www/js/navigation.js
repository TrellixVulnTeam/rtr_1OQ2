/*
 * Manages the naivgation bar and the display of elements.
 */

"use strict";

//stores current page for back button.
var currentPage = 0;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // ready to use device APIs
    navigator.geolocation.getCurrentPosition(function() {
        console.log("success");
    });
}

$("#map-icon").click(displayMap);

$("#news-icon").click(displayNews);

$("#events-icon").click(displayEvents);

$("#info-icon").click(displayInfo);

$("#infoToVisions").click(displayVisions);

$("#infoToVolunteer").click(displayVolunteer);

$("#infoToLeaflets").click(displayLeaflets);

//show event detail
$("#events .content-item").click(displayEventContentItem);

//$("#news .content-item").click(displayNewsContentItem);

$("#volunteer-ops .content-item").click(displayVolunteerSignup);

function displayMap(){
    // hide content, because the map requires a different layout
    $(".content").css("display", "none");
    tabItemSelected($("#map-icon"),$("#map"));
    updateTitle("Map");
    $("#backbutton").hide();
    updateMapSize();
    currentPage = 0;
    return false;
}

function displayNews(){
    // display content again (because map hides it)
    $(".content").css("display", "block");
    $(".content").css({"margin-top": "3.0 em"});
    tabItemSelected($("#news-icon"),$("#news"));
    updateTitle("");
    $("#backbutton").hide();
    $("#topnav-title").append(`
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search News" style="height:34px">
            </div>`
    );
    $(".content-item").show();
    $("#news-article").empty();
    $("#news-article").hide();
    currentPage = 3;
    return false;
}

function displayEvents(){
    // display content again (because map hides it)
    $(".content").css("display", "block");
    $(".content").css({"margin-top": "3.0 em"});
    $(".event-section").hide();
    $("#events_main").show();
    tabItemSelected($("#events-icon"),$("#events"));
    updateTitle("");
    $("#backbutton").hide();
    $("#topnav-title").append(`
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search Events" style="height:34px">
            </div>`
    );
    $(".content-item").show();
    $("#event_detail").hide();
    currentPage = 5;
    return false;
}

function displayInfo(){
    // display content again (because map hides it)
    $(".content").css("display", "block");
    //changes margin so that there isnt a space between navbar and logo
    $(".content").css({"margin-top": "4.3 em"});
    $(".info-section").hide();
    $(".info_main").show();
    tabItemSelected($("#info-icon"),$("#info"));
    updateTitle("Information");
    $("#backbutton").hide();
    currentPage = 7;
    return false;
}

function displayVisions(){
    //changes margin so that there isnt a space between navbar and logo
    $(".container").hide();
    $("#visions-aims").show();
    updateTitle("Visions and Aims");
    $("#backbutton").show();
    currentPage = 8;
    return false;
}

function displayVolunteer(){
    //changes margin so that there isnt a space between navbar and logo
    $(".info_main").hide();
    $("#volunteer-ops").show();
    $(".info_images").hide();
    updateTitle("Volunteer Opportunities");
    $("#backbutton").show();
    currentPage = 9;
    return false;
}

function displayVolunteerSignup(){
    $("#volunteer-ops").hide();
    $("#volunteer-signup").show();
    updateTitle("Volunteer sign up");
    $("#backbutton").show();
    currentPage = 10;
    return false;
}

function displayLeaflets(){
    //changes margin so that there isnt a space between navbar and logo
    $(".info_main").hide();
    $("#leaflets").show();
    $(".info_images").hide();
    updateTitle("Leaflets");
    $("#backbutton").show();
    currentPage = 10;
    return false;
}

function displayEventContentItem(){
    //changes margin so that there isnt a space between navbar and logo
    $(".events_main").hide();
    $("#backbutton").show();
    $("#event_detail").show();
    updateTitle("Event Detail");
    currentPage = 6;
    return false;
}

/*
function displayNewsContentItem(){
    $("#backbutton").show();
    $(".content-item").hide();
    $("#news-article").show();
    updateTitle("Some Article");
    currentPage = 4;
    return false;
}*/

function backButtonPressed(){
    updateMapSize();
    switch(currentPage){
        case 1:
        case 2:
            displayMap();
            break;
        case 4:
            displayNews();
            break;
        case 6:
            displayEvents();
            break;
        case 8:
        case 9:
        case 10:
        case 11:
            displayInfo();
            break;
        case 12:
            displayLeaflets();
    }
}

document.addEventListener("backbutton", function(){
   backButtonPressed();
});

// update the top title of the navigation bar when a new section is selected
function updateTitle(titleText) {
    $("#topnav-title").text(titleText);
    // if we are changing the title, we are likley changing page, so scroll to top
    window.scrollTo(0, 0);
}

// when a tab item is selected, hide all current tab items and then only show the currently selected one
function tabItemSelected($tabItem,$section) {
    $(".app-section").hide();
    $section.show();
    $(".tab-icon").removeClass("active");
    $tabItem.addClass("active");
}