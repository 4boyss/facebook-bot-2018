const html = (normal={}) => {
    const _normal = JSON.stringify(normal)
    
    return `
<!DOCTYPE html>
<html>
    <head>
        <title>Facebook Login JavaScript Example</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="/static/css/fb.css">
    </head>
    <body>
        <script> 
            const FB_APP_ID=${process.env.FB_APP_ID};
            const normal=JSON.parse('${_normal}');
        </script>
        <div class='bigBox'>
            <div class='statusBox'>
            <div id="status">
            </div>
            </div>

            <div><h1> COOL BANANA </h1></div>

            <div class='buttonBox'>
                <fb:login-button scope="public_profile,email" onlogin="onClickButton();">
                </fb:login-button>
            </div>
            
        </div>
        <script src="/static/js/fb.js"></script>
    </body>
</html>`
}

module.exports = html