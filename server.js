'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var verifyUser = require("./VerifyGarminUser");

http.createServer(verifyUser.MainListen).listen(port);
