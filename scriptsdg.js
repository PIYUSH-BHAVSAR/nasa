fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.charts.forEach(chart => {
            const ctx = document.getElementById(chart.id).getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019,
                        2020,
                        2021,
                        ], // X-axis labels
                    datasets: [{
                        label: chart.label,
                        data: chart.data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    })
    .catch(error => console.error('Error loading data:', error));