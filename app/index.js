const socket = io('http://localhost:3000');

socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    // document.querySelector('ul').appendChild(el)
});


// const socket = io("http://localhost:3000");
// socket.on("connect", () => {
//     displayMessage('loll');
// })

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'lol',
      backgroundColor: 'rgba(250, 0, 0, 0.1)',
      borderColor: 'rgb(200, 0, 0)',
      fill: true,
      data: [0, 10, 5, 2, 20, 45],
    },
    {
        label: 'lal',
        backgroundColor: 'rgba(0, 0, 250, 0.1)',
        borderColor: 'rgb(0, 0, 200)',
        fill: true,
        data: [0, 2, 30, 45, 50, 30],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);