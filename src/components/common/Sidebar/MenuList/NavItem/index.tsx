import { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@store/index'

// material-ui
import { useTheme } from '@mui/material/styles'
import { ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material'

// project imports
import { selectIsOpen } from '@store/slices/menu/selectors'
import { menuOpen, setMenu } from '@store/slices/menu/actions'
import { INavItem } from '@src/utils/navigation'

// assets
import { TablerIcon } from '@tabler/icons'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

// types
type NavItemProps = Readonly<{
    item: INavItem
    level: number
}>

type ListItemProps = Readonly<{
    component: React.ElementType
    to?: string
    href?: string
    target?: string
}>

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: NavItemProps) => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const isOpen = useSelector(selectIsOpen)
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))

    const Icon = item?.icon as TablerIcon
    const itemIcon = Icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
                height: isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    )

    let itemTarget = '_self'
    if (item.target) {
        itemTarget = '_blank'
    }

    let listItemProps: ListItemProps = {
        component: forwardRef<HTMLAnchorElement>((props, ref) => <Link ref={ref} {...props} to={item?.url ?? ''} target={itemTarget} />)
    }
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget }
    }

    const itemHandler = (id: string) => {
        dispatch(menuOpen({ id }))
        if (matchesSM) dispatch(setMenu({ opened: false }))
    }

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id)
        if (currentIndex > -1) {
            dispatch(menuOpen({ id: item.id }))
        }
    }, [])

    return (
        <ListItemButton
            data-cy="sidebar--menu-list--nav-item"
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: `${theme.custom.borderRadius}px`,
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 1 : 1.25,
                pl: `${level * 24}px`
            }}
            selected={isOpen.findIndex((id) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant={isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography variant="caption" sx={{ ...theme.custom.subMenuCaption }} display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
        </ListItemButton>
    )
}

export default NavItem
