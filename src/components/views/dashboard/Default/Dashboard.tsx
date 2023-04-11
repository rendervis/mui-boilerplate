import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { Grid, useTheme } from '@mui/material'

// project imports
import EarningCard from './EarningCard'
import TotalOrderLineChartCard from './TotalOrderLineChartCard'
import TotalIncomeDarkCard from './TotalIncomeDarkCard'
import TotalIncomeLightCard from './TotalIncomeLightCard'

import { selectAuth } from '@src/store/slices/localAuth/selectors'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const theme = useTheme()
    const gridSpacing = theme.custom.gridSpacing
    const [isLoading, setLoading] = useState(true)
    const auth = useSelector(selectAuth)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard
