// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

// type: 'line',
// height: 90,

const options = {
    chart: {
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#fff'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    yaxis: {
        min: 0,
        max: 100
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: 'Total Order'
        },
        marker: {
            show: false
        }
    }
};
const series = [
    {
        name: 'series1',
        data: [35, 44, 9, 54, 45, 66, 41, 69]
    }
];

export  {options, series};
