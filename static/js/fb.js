
  // This is called with the results from from FB.getLoginStatus().
  const setStatusById = (msg) => document.getElementById('status').innerHTML = msg

  function triggerAuth(response) {
    FB.getLoginStatus(function(response) {
      const {accessToken, userID, signedRequest} = response.authResponse

      console.log('triggerAuth');
      console.log(response);

      if(response.status !== 'connected') 
        return setStatusById('Please log into this app.')

    //   return window.location.replace(`/login?accessToken=${accessToken}`);
    })
  }
  
  window.fbAsyncInit = function() {
    console.log('2 ---------')
    FB.init({
      appId      : window.FB_APP_ID,
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.10' // use graph api version 2.8
    });

    return triggerAuth();
  };

  function onClickButton() {
    return triggerAuth()
  }
  

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  