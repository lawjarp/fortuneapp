﻿var user = {name:"Prajwal Basnet", gender:"M"};

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });


}


window.fbAsyncInit = function () {
    FB.init({
        appId: '1267092980051863',
        cookie: true,  // enable cookies to allow the server to access 
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });


};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    //FB.api('/me', function (response) {
    //    console.log('Successful login for: ' + response.name);
    //    document.getElementById('status').innerHTML =
    //      'Thanks for logging in, ' + response.name + '!';
    //});
    
    //FB.api('/me', function (data) {
    //    console.log(data);
       
        
    //});


    FB.api('/me', function (response) {
        user = response;

    });


    FB.api("/me/picture?width=600&height=600", function (response) {
        document.getElementById("userphoto").src = response.data.url;
     
        loadapp(location.search.split('appname=')[1]);
    });

    document.getElementById("fblogin").style.height = "0px";
}

var photo;
var flashcard;
var anytext1;
var anytext2;
var anytext3;
var img1;
var img2 ;
var img3;

function loadapp(appname) {
    photo = document.getElementById("userphoto");
    flashcard = document.getElementById("flashcard");
     img1 = document.getElementById("img1");
     img2 = document.getElementById("img2");
     img3 = document.getElementById("img2");
     anytext1 = document.getElementById("anytext1");
     anytext2 = document.getElementById("anytext2");
     anytext3 = document.getElementById("anytext3");
     flashcard.style.height = "300px";
     hideall();
     photo.style.visibility = "visible";
    switch (appname) {
        case "luckyno":
            luckyno();
            break;
        case "n1000":
            n1000();
            break;
        case "child":
            flashcard.style.height = "0px";
            break;
        case "nextlife":
            flashcard.style.height = "0px";
            break;
        case "prevlife":
            flashcard.style.height = "0px";
            break;

        default:
            n1000();
    }
}

function hideall() {
    img1.style.visibility = "hidden";
    img2.style.visibility = "hidden";
    img3.style.visibility = "hidden";
    anytext1.style.visibility = "hidden";
    anytext2.style.visibility = "hidden";
    anytext3.style.visibility = "hidden";

}
function luckyno() {

    photo.style.height = "100px";
    photo.style.width = "100px";

    flashcard.style.backgroundColor = "ff0000";
    anytext1.innerHTML = user.name;
    anytext1.style.fontSize = "20px";
    anytext1.style.top = "50px";
    anytext1.style.left = "150px";
    anytext1.style.visibility = "visible";

    anytext2.innerHTML = "Your Lucky No:";
    anytext2.style.fontSize = "70px";
    anytext2.style.top = "50px";
    anytext2.style.left = "100px";
    anytext2.style.visibility = "visible";

    

    var word = user.name;
    var sum = 0;
    for (var i = word.length - 1; i >= 0; i--) {
        sum += (word.charCodeAt(i) - 96);
    }
    var val = Math.abs(sum);
    if (val > 9) {
        val = val.toString().substr(0, 1);
    }
    
    anytext3.innerHTML = val;
    anytext3.style.fontSize = "300px";
    anytext3.style.top = "-100px";
    anytext3.style.left = "250px";
    anytext3.style.color = "#ff0000";
    anytext3.style.opacity = "0.5";
    anytext3.style.visibility = "visible";


}

function n1000() {
    flashcard.style.backgroundColor = "ff0000";
    flashcard.style.width = "800px";
    flashcard.style.height = "343px";


    //photo.src = "1000/pic.jpg";
    photo.style.top = "40px";
    photo.style.left = "30px";


    img1.src = "1000/01.jpg";
    img1.style.top = "0px";
    img1.style.left="314px";
    img1.style.height = "343px";
    img1.style.visibility = "visible";


    img2.src = "1000/02.png";
    img2.style.left = "0px";
    img2.style.height = "343px";
    img2.style.visibility = "visible";

    photo.style.width = '244px';
    photo.style.height = '244px';
    var viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
    if (viewPortWidth<800) {
        flashcard.style.zoom = viewPortWidth / 800;
        //-moz-transform: scale(0.5);
    }
    

}








