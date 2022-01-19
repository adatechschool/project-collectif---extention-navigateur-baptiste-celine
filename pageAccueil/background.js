// background.js

let newURL = "page.html";
let clientId = '24380932461-mj0it1l1h4bp97b1ghc76tmr0t45c249.apps.googleusercontent.com'
let redirectUri = `https://${chrome.runtime.id}.chromiumapp.org/`
let nonce = Math.random().toString(36).substring(2, 15);
  
chrome.action.onClicked.addListener(function() {
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  
    authUrl.searchParams.set('client_id', clientId);
    authUrl.searchParams.set('response_type', 'id_token');
    authUrl.searchParams.set('redirect_uri', redirectUri);
    // Add the OpenID scope. Scopes allow you to access the user’s information.
    authUrl.searchParams.set('scope', 'openid profile email');
    authUrl.searchParams.set('nonce', nonce);
    // Show the consent screen after login.
    authUrl.searchParams.set('prompt', 'consent');

    chrome.identity.launchWebAuthFlow(
        {
          url: authUrl.href,
          interactive: true,
        },
        (redirectUrl) => {
          if (redirectUrl) {
            // The ID token is in the URL hash
            const urlHash = redirectUrl.split('#')[1];
            const params = new URLSearchParams(urlHash);
            const jwt = params.get('id_token');
  
            // Parse the JSON Web Token
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const token = JSON.parse(atob(base64));
  
            console.log('token', token);
          }
        },
    );

    console.log('action clicked');
    chrome.tabs.create({ url: newURL });
  });

