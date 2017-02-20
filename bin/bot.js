# bin/bot.js

'use strict';

var GMB_Bot = require('../lib/gmb_bot');

var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var gmb_bot = new GMB_Bot({
    token: token,
    dbPath: dbPath,
    name: name
});

gmb_bot.run();