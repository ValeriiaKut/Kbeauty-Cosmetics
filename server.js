const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Використовуємо папку "public" для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Обслуговування React-додатка
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
