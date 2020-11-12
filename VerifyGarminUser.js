'use strict';
var url = require('url');
var fs = require('fs');
var listM = require('./GoogleSheet');
var test;

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
    else if (incomingMessage.pathname == "/dailies")
    {
        //var dataObj = JSON.parse();

        //testing the push service
        test = req.body;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end();
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        //res.write('req:\n');
        //if(req.body!=null)
        //    res.write(req.body);
        //res.end();
    }
    else if (incomingMessage.pathname == "/test")
    {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('test:\n');
        if(test!=null)
            res.write(test);
        res.end();
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