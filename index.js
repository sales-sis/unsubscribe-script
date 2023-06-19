const express = require('express');

const app = express();

let list = [];

app.get('/list', (req, res) => {
    const html = list.map(item => `<p>${item}</p>`).join('')
    res.send(html);
});

app.get('/unsubscribe/:email', (req, res) => {
    const { params } = req;
    list.push(params.email);
    res.send('You have successfully unsubscribed.');
});

app.get('/reset', (req, res) => {
    list = [];
    res.send('Reset successfully');
});

const server = app.listen(process.env.PORT || 3000);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
