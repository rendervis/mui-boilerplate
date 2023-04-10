// material-ui
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material'

// project imports
import { AccountProfile } from './account-profile'
import { AccountForm } from './account-form'

const Page = () => (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <div>
                        <Typography variant="h4">Account</Typography>
                    </div>
                    <div>
                        <Grid container spacing={3}>
                            <Grid xs={12} md={6} lg={4}>
                                <AccountProfile />
                            </Grid>
                            <Grid xs={12} md={6} lg={8}>
                                <AccountForm />
                            </Grid>
                        </Grid>
                    </div>
                </Stack>
            </Container>
        </Box>
    </>
)

export default Page
