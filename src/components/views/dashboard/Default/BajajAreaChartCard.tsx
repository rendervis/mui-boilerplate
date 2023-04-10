import { useEffect } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Card, Grid, Typography } from '@mui/material'

// third-party
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

// project imports
import chartData from './chart-data/bajaj-area-chart'

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
    const theme = useTheme()

    const orangeDark = theme.palette.orange.dark

    useEffect(() => {
        const newSupportChart = {
            ...chartData,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        }
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart)
    }, [orangeDark])

    return (
        <Card sx={{ bgcolor: 'secondary.light' }}>
            <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                                Bajaj Finery
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                                $1839.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
                        10% Profit
                    </Typography>
                </Grid>
            </Grid>
            <Chart {...chartData} type="area" heigh={95} />
        </Card>
    )
}

export default BajajAreaChartCard
