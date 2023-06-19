const express = require('express');
const fs = require('fs-extra');

const app = express();

app.get('/unsubscribe/:email', async (req, res) => {
    const { params } = req;
    await fs.appendFile('emails.txt', `${params.email}\r\n`);
    res.send('You have successfully unsubscribed.');
});

const server = app.listen(process.env.PORT || 3000);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
