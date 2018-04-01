
  // This is called with the results from from FB.getLoginStatus().
  const setStatusById = (msg) => document.getElementById('status').innerHTML = msg

  function triggerAuth(response) {
    console.log(' 1- ------------- triggerAuth')
    FB.getLoginStatus(function(response) {

    console.log(' 2- ------------- triggerAuth')
      const {accessToken, userID, signedRequest} = response.authResponse
      const {account_linking_token, redirect_uri} = normal
      
    console.log(' 3- ------------- triggerAuth')
      console.log(response);

      if(response.status !== 'connected') 
        return setStatusById('Please log into this app.')

      // return window.location.replace(`/login/fb-auth?accessToken=${accessToken}&account_linking_token=${account_linking_token}&redirect_uri=${redirect_uri}`);
    })
  }
  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : FB_APP_ID,
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
  