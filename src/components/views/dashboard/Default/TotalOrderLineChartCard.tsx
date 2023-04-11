import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { useTheme, styled } from '@mui/material/styles'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'

// third-party
import Chart from 'react-apexcharts'

// project imports
import { SkeletonEarningCard, MainCard } from '@components/ui/cards'

import * as ChartDataMonth from './chart-data/total-order-month-line-chart'
import * as ChartDataYear from './chart-data/total-order-year-line-chart'

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.primary.dark,
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary.dark,
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}))

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

type TotalOrderLineChartCardProps = {
    isLoading: boolean
}

const TotalOrderLineChartCard = ({ isLoading }: TotalOrderLineChartCardProps) => {
    const theme = useTheme()

    const [timeValue, setTimeValue] = useState(false)
    const handleChangeTime = (event: any, newValue: any) => {
        setTimeValue(newValue)
    }

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} cardContent={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.custom.commonAvatar,
                                                ...theme.custom.largeAvatar,
                                                backgroundColor: theme.palette.primary.dark,
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <LocalMallOutlinedIcon fontSize="inherit" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, true)}
                                        >
                                            Month
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, false)}
                                        >
                                            Year
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                {timeValue ? (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        $108
                                                    </Typography>
                                                ) : (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        $961
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item>
                                                <Avatar
                                                    sx={{
                                                        ...theme.custom.smallAvatar,
                                                        cursor: 'pointer',
                                                        backgroundColor: theme.palette.primary.light,
                                                        color: theme.palette.primary.dark
                                                    }}
                                                >
                                                    <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color: theme.palette.primary.light
                                                    }}
                                                >
                                                    Total Order
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {timeValue ? (
                                            <Chart {...(ChartDataMonth as Chart['props'])} height={90} type="line" />
                                        ) : (
                                            <Chart {...(ChartDataYear as Chart['props'])} height={90} type="line" />
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    )
}

export default TotalOrderLineChartCard
