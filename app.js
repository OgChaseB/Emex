const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Настройка сессий
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Маршруты
app.use('/auth', authRoutes);

// Маршруты для статических страниц
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'projects.html'));
});

app.get('/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'price.html'));
});

app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'reviews.html'));
});

app.get('/dost', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'dost.html'));
});
app.get('/panel2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'panel2.html'));
});
const orderRoutes = require('./routes/orderRoutes');
app.use('/order', orderRoutes);

module.exports = app;