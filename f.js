
var vapp = location.search.split('apprequested=')[1];

function addlog(txtt) {
    document.getElementById("logg").innerHTML = document.getElementById("logg").innerHTML + "</br>" + txtt;
}

addlog("started");
var acc;
var uniqueno;
var info;

function loadfb() {

window.fbAsyncInit = function () {
    FB.init({
        appId: '1267092980051863',
        xfbml: true,
        version: 'v2.8',
        cookie: true,
        status: true,
        oauth: true,
        frictionlessRequests: true
                
    });
    addlog("fbasyncinit");
    function onLogin(response) {
        if (response.status == 'connected') {

            FB.api('/me', function (data) {
                info = data;
                console.log(info);
                var iid = "" + data.id + " ";
                        
                generateinfo();
                document.getElementById("flashc").style.visibility = "visible";

                document.getElementById("loadingscreen").style.visibility = "hidden";
            });
            FB.api("/me/picture?width=600&height=600", function (response) {
                document.getElementById("userphoto").src = response.data.url;
            });


        }
    }

    function loginpop() {
        FB.login(function (response) {
                    onLogin(response);
        }, { scope: 'user_friends, email ' });
       // checkstatus();


    }
    //function checkstatus() {
    //    if (response.status == 'connected') {
    //        onLogin(response);

    //    }
    //    else {
    //    }
    //}

    FB.getLoginStatus(function (response) {
        if (response.status == 'connected') {
            onLogin(response);
            addlog("fb.getLoginStatus");
            } 
        else {
            document.getElementById("btnfblogin").style.visibility = "visible";
            addlog("fb.getLoginStatus_else");
        }
    });


    // ADD ADDITIONAL FACEBOOK CODE HERE




};


}

///////////////////


function fb_publish() {
    FB.ui(
  {
      method: 'feed',
      name: "" + info.name + "'s Lucky Number is  " + luckyno + "",
      link: 'https://mylifeapp.herokuapp.com/',
      picture: 'https://bhabishyabani.herokuapp.com/luckyno.jpg',
      caption: "" + info.name + " को लागि हाम्रो भबिश्यबाणी । ",
      description: "तपाईंको के हुन्छ त ? थाहा पाउनको लागि यहाँ CLICK गर्नुहोस् । ",
  },
  function (response) {
      if (response && response.post_id) { 
          // alert('Post was published.');
      } else {
          alert('Post was not published.');
      }
  }
);
}


////////////////// sum name
var posttitle;
var luckyno;
function generateinfo() {
    //var d = new Date();
    //var n = d.getDay();
    var word = info.name;
    var sum = 0;
    for (var i = word.length - 1; i >= 0; i--) {
        sum += (word.charCodeAt(i) - 96);
    }
    var val = Math.abs(sum);
    if (val > 9) {
        val = val.toString().substr(0, 1);

    }
    luckyno = val;
    //document.getElementById("aftername").innerHTML = "Your Lucky Number is  "+val+"";
    document.getElementById("aftername").textContent = "" + val + " ";
           

}






