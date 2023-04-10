// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //
// type: 'area',
// height: 95,

const chartOptions = {
    chart: {
        id: 'support-chart',
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 1
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: 'Ticket '
        },
        marker: {
            show: false
        }
    }
}

const chartSeries = [
    {
        data: [0, 15, 10, 50, 30, 40, 25]
    }
]

export default { chartOptions, chartSeries }
