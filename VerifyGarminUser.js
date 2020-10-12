'use strict';
var url = require('url');
var fs = require('fs');
var listM = require('./GoogleSheet');

function MainListen(req, res) {
    var incomingMessage = url.parse(req.url, true);
    var parameters = incomingMessage.query;

    var oauthToken; //This is a token tied to a spefic request
    var oauthVerify; //This is tied to a user. Once this is received, that means the user authenicated!

    //Get the tokens from the request
    oauthToken = parameters.oauth_token;
    oauthVerify = parameters.oauth_verifier

    //print confirmation and next steps to the user*********Don't print out the tokens!
    if (incomingMessage.pathname == "/google")
    {
        //listM.ListMajors();
    }
    else
    { 
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Oauth Token:\n');
        if (oauthToken != null)
            res.write(oauthToken);
        res.write('\nOauth Verify:\n');
        if (oauthToken != null)
            res.write(oauthVerify);
        res.end();
    }
}

module.exports.MainListen = MainListen;