import { ReactNode } from 'react'

// material-ui
import { Box } from '@mui/material'

// project import
import { MainCard } from '@components/ui/cards'

// types
type AuthCardWrapperProps = Readonly<{
    children?: ReactNode
}>

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...rest }: AuthCardWrapperProps) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        cardContent={false}
        {...rest}
    >
        <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </MainCard>
)

export default AuthCardWrapper
