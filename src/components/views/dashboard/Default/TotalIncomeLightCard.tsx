// material-ui
import { useTheme, styled } from '@mui/material/styles'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

// project imports
import { SkeletonTotalIncomeCard, MainCard } from '@components/ui/cards'

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone'

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.orange.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.orange.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}))

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

type TotalIncomeLightCardProps = Readonly<{
    isLoading: boolean
}>
const TotalIncomeLightCard = ({ isLoading }: TotalIncomeLightCardProps) => {
    const theme = useTheme()

    return (
        <>
            {isLoading ? (
                <SkeletonTotalIncomeCard />
            ) : (
                <CardWrapper border={false} cardContent={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.custom.commonAvatar,
                                            ...theme.custom.largeAvatar,
                                            backgroundColor: theme.palette.orange.light,
                                            color: theme.palette.orange.dark
                                        }}
                                    >
                                        <StorefrontTwoToneIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0,
                                        mt: 0.45,
                                        mb: 0.45
                                    }}
                                    primary={<Typography variant="h4">$203k</Typography>}
                                    secondary={
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: theme.palette.grey[500],
                                                mt: 0.5
                                            }}
                                        >
                                            Total Income
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    )
}

export default TotalIncomeLightCard
