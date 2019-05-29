// SUN
var sunChartNode = document.getElementById('sun-chart').getContext('2d');
var sunChart = new Chart(sunChartNode, {
    type: 'pie',
    data: {
        labels: ['Wodór', 'Hel', 'Inne Gazy'],
        datasets: [{
            data: [70.95, 27.74, 1.31],
            backgroundColor: [
                'rgba(66, 97, 173, 1)',
                'rgba(216, 136, 12, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// MERCURY
var mercuryChartNode = document.getElementById('mercury-chart').getContext('2d');
var mercuryChart = new Chart(mercuryChartNode, {
    type: 'pie',
    data: {
        labels: ['Tlen', 'Sód', 'Wodór', 'Inne Gazy'],
        datasets: [{
            data: [42, 29, 22, 7],
            backgroundColor: [
                'rgba(144, 173, 51, 1)',
                'rgba(150, 150, 150, 1)',
                'rgba(66, 97, 173, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// VENUS
var venusChartNode = document.getElementById('venus-chart').getContext('2d');
var venusChart = new Chart(venusChartNode, {
    type: 'pie',
    data: {
        labels: ['Dwutlenek Węgla', 'Azot', 'Inne Gazy'],
        datasets: [{
            data: [96, 3, 1],
            backgroundColor: [
                'rgba(180, 72, 22, 1)',
                'rgba(49, 136, 171, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// EARTH
var earthChartNode = document.getElementById('earth-chart').getContext('2d');
var earthChart = new Chart(earthChartNode, {
    type: 'pie',
    data: {
        labels: ['Azot','Tlen','Argon', 'Inne Gazy'],
        datasets: [{
            data: [77, 21, 1, 1],
            backgroundColor: [
                'rgba(49, 136, 171, 1)',
                'rgba(144, 173, 51, 1)',
                'rgba(204, 111, 110, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// MARS
var marsChartNode = document.getElementById('mars-chart').getContext('2d');
var marsChart = new Chart(marsChartNode, {
    type: 'pie',
    data: {
        labels: ['Dwutlenek Węgla','Azot','Argon', 'Inne Gazy'],
        datasets: [{
            data: [95, 3, 1.5, 0.5],
            backgroundColor: [
                'rgba(180, 72, 22, 1)',
                'rgba(49, 136, 171, 1)',
                'rgba(204, 111, 110, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// JUPITER
var jupiterChartNode = document.getElementById('jupiter-chart').getContext('2d');
var jupiterChart = new Chart(jupiterChartNode, {
    type: 'pie',
    data: {
        labels: ['Wodór','Hel', 'Inne Gazy'],
        datasets: [{
            data: [90, 9, 1],
            backgroundColor: [
                'rgba(66, 97, 173, 1)',
                'rgba(216, 136, 12, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// SATURN
var saturnChartNode = document.getElementById('saturn-chart').getContext('2d');
var saturnChart = new Chart(saturnChartNode, {
    type: 'pie',
    data: {
        labels: ['Wodór','Hel', 'Inne Gazy'],
        datasets: [{
            data: [96, 3, 1],
            backgroundColor: [
                'rgba(66, 97, 173, 1)',
                'rgba(216, 136, 12, 1)',
                'rgba(180, 147, 127, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// URAN
var uranusChartNode = document.getElementById('uranus-chart').getContext('2d');
var uranusChart = new Chart(uranusChartNode, {
    type: 'pie',
    data: {
        labels: ['Wodór','Hel', 'Metan'],
        datasets: [{
            data: [83, 15, 2],
            backgroundColor: [
                'rgba(66, 97, 173, 1)',
                'rgba(216, 136, 12, 1)',
                'rgba(208, 187, 66, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});

// NEPTUNE
var neptuneChartNode = document.getElementById('neptune-chart').getContext('2d');
var neptuneChart = new Chart(neptuneChartNode, {
    type: 'pie',
    data: {
        labels: ['Wodór','Hel', 'Metan'],
        datasets: [{
            data: [80, 19, 1],
            backgroundColor: [
                'rgba(66, 97, 173, 1)',
                'rgba(216, 136, 12, 1)',
                'rgba(208, 187, 66, 1)',
            ],
            borderColor: [
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
                'rgba(0, 0, 0 , 1)',
            ],
            borderWidth: 5
        }]
    },
	options: {
        legend: {
            display: true,
        },
		title: {
			display: false
		}
    }
});