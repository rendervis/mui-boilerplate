// material-ui
import { Typography } from '@mui/material'

// project imports
import NavGroup from './NavGroup'
import navigation, { INavItem } from '@src/utils/navigation'

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = navigation.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item as INavItem} />
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                )
        }
    })

    return <>{navItems}</>
}

export default MenuList
