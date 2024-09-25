const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z'];
let currentKeyIndex = 0
function displayNewKey() {
    const keyElement = document.getElementById('key');
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = `Клавіша: ${keys[currentKeyIndex]}`;
}

window.addEventListener('keydown', (event) => {
    const keyElement = document.getElementById('key');
    const pressedKey = event.key.toUpperCase();

    if (pressedKey === keys[currentKeyIndex]) {
        displayNewKey();
        PNotify.success({
            title: 'Правильно!',
            text: `Ви натиснули правильну клавішу: ${pressedKey}`,
        });
    } else {
        PNotify.error({
            title: 'Помилка!',
            text: `Ви натиснули неправильну клавішу: ${pressedKey}`,
        });
    }
});

window.addEventListener('keypress', (event) => {
    event.preventDefault();
})

document.getElementById('new-game').addEventListener('click', () => {
    displayNewKey();
    PNotify.info({
        title: 'Нова гра!',
        text: 'Гра почалася! Натискайте правильну клавішу.',
    });
});


displayNewKey();

const ctx = document.getElementById('sales-chart').getContext('2d');
const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 1,
        },
    ],
};

const salesChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
