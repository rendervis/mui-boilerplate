// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Drawer, useMediaQuery } from '@mui/material'

// project imports
import MenuList from './MenuList'
import { MenuCard } from '@components/ui/cards'
import { LogoSection } from '@components/common/LogoSection'

// types
type SidebarProps = Readonly<{
    drawerOpen: boolean
    drawerToggle: () => void
}>

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle }: SidebarProps) => {
    const theme = useTheme()
    const drawerWidth = theme.custom.drawerWidth
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))

    const content = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
            {/** BrowserView */}
            {matchUpMd && (
                <Box
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >
                    <MenuList />
                    <MenuCard />
                </Box>
            )}
            {/**MobileView */}
            {!matchUpMd && (
                <Box sx={{ px: 2 }}>
                    <MenuList />
                    <MenuCard />
                </Box>
            )}
        </>
    )

    return (
        <Box
            data-cy="sidebar-nav"
            component="nav"
            sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {content}
            </Drawer>
        </Box>
    )
}

export default Sidebar
