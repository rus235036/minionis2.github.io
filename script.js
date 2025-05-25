// Массив с изображениями миньонов
const minionImages = [
    "https://static.wikia.nocookie.net/8889a5bc-e62b-4858-83e9-4750d7e7d058/scale-to-width/370",
    "https://avatars.mds.yandex.net/i?id=ab841214b131a7e813d3f83f8f176286b97df739-4220100-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=dea42a059264367a733c1a8baaabeae4d2183622-5025855-images-thumbs&n=13",
    "https://i.pinimg.com/736x/db/63/98/db63987d5dba2c707e44d8a2bc5dd188.jpg"
];

// Массив с фразами миньонов
const minionPhrases = [
    "Банана!",
    "Папайя!",
    "Тутуту!",
    "Гелко!",
    "Поха поха!",
    "Миака миака!",
    "Ла ла ла!",
    "Белло!"
];

// Функция для смены миньона
function changeMinion() {
    const randomIndex = Math.floor(Math.random() * minionImages.length);
    document.getElementById('minionImage').src = minionImages[randomIndex];
    document.getElementById('minionSpeech').textContent = "Ой!";
}

// Функция для вывода случайной фразы
function speakMinion() {
    const randomIndex = Math.floor(Math.random() * minionPhrases.length);
    document.getElementById('minionSpeech').textContent = minionPhrases[randomIndex];
}

// Функция для анимации танца
function danceMinion() {
    const minion = document.getElementById('minionImage');
    minion.style.animation = 'none';
    void minion.offsetWidth; // Перезапуск анимации
    minion.style.animation = 'dance 0.5s infinite alternate';
    document.getElementById('minionSpeech').textContent = "Я танцую!";
    
    // Остановка анимации через 3 секунды
    setTimeout(() => {
        minion.style.animation = 'none';
    }, 3000);
}