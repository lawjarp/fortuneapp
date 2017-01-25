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
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
    });
    FB.api('/me', 
        {fields: "id,about,age_range,picture,bio,birthday,context,email,first_name,gender,hometown,link,location,middle_name,name,timezone,website,work"}, 
        function(response) {
            console.log('API response', response);
            $("#fb-profile-picture").append('<img src="' + response.picture.data.url + '"> ');
            $("#name").append(response.name);
            $("#user-id").append(response.id);
            $("#work").append(response.gender);
            $("#birthday").append(response.birthday);
            $("#education").append(response.hometown);
        }
    );

    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
    });


    FB.api("/me/picture?width=600&height=600", function (response) {
                        document.getElementById("userphoto").src = response.data.url;
                    });
}







//var vapp = location.search.split('apprequested=')[1];

//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1267092980051863";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));
//var acc;
//var uniqueno;
//var info;
//window.fbAsyncInit = function () {
//    FB.init({
//        appId: '1267092980051863',
//        xfbml: true,
//        version: 'v2.8',
//        cookie: true,
//        status: true,
//        oauth: true,
//        frictionlessRequests: true
                
//    });

//    function onLogin(response) {
//        if (response.status == 'connected') {

//            FB.api('/me', function (data) {
//                info = data;
//                console.log(info);
//                var iid = "" + data.id + " ";
                        
//                generateinfo();
//                document.getElementById("flashc").style.visibility = "visible";

//                document.getElementById("loadingscreen").style.visibility = "hidden";
//            });
//            FB.api("/me/picture?width=600&height=600", function (response) {
//                document.getElementById("userphoto").src = response.data.url;
//            });


//        }
//    }


//    FB.getLoginStatus(function (response) {
//        if (response.status == 'connected') {
//            onLogin(response);

//        } else {
//            FB.login(function (response) {
//                onLogin(response);
//            }, { scope: 'user_friends, email ' });
//        }
//    });


//    // ADD ADDITIONAL FACEBOOK CODE HERE




//};


//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) { return; }
//    js = d.createElement(s); js.id = id;
//    //js.src = "//connect.facebook.net/en_US/sdk.js";
//    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1198972333514156";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));


////(function (d, s, id) {
////    var js, fjs = d.getElementsByTagName(s)[0];
////    if (d.getElementById(id)) {
////        return;
////    }
////    js = d.createElement(s);
////    js.id = id;
////    js.src = "//connect.facebook.net/en_US/sdk.js";
////    fjs.parentNode.insertBefore(js, fjs);
////}(document, 'script', 'facebook-jssdk'));

////var friends = new Array();
////function inviteothers() {
////    FB.ui({
////        method: 'apprequests',
////        message: "Make your nakkali driving license now"
////    }, function (response) {
////        if (!response || response.error) {
////            inviteothers();
////        }
////        else {

////        }
////    }
////    );
////}



/////////////////////


//function fb_publish() {
//    FB.ui(
//  {
//      method: 'feed',
//      name: "" + info.name + "'s Lucky Number is  " + luckyno + "",
//      link: 'https://mylifeapp.herokuapp.com/',
//      picture: 'https://bhabishyabani.herokuapp.com/luckyno.jpg',
//      caption: "" + info.name + " को लागि हाम्रो भबिश्यबाणी । ",
//      description: "तपाईंको के हुन्छ त ? थाहा पाउनको लागि यहाँ CLICK गर्नुहोस् । ",
//  },
//  function (response) {
//      if (response && response.post_id) { 
//          // alert('Post was published.');
//      } else {
//          alert('Post was not published.');
//      }
//  }
//);
//}


//////////////////// sum name
//var posttitle;
//var luckyno;
//function generateinfo() {
//    //var d = new Date();
//    //var n = d.getDay();
//    var word = info.name;
//    var sum = 0;
//    for (var i = word.length - 1; i >= 0; i--) {
//        sum += (word.charCodeAt(i) - 96);
//    }
//    var val = Math.abs(sum);
//    if (val > 9) {
//        val = val.toString().substr(0, 1);

//    }
//    luckyno = val;
//    //document.getElementById("aftername").innerHTML = "Your Lucky Number is  "+val+"";
//    document.getElementById("aftername").textContent = "" + val + " ";
           

//}






