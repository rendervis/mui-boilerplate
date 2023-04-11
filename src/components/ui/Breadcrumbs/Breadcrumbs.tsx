import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Card, Divider, Grid, Typography } from '@mui/material'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'

// project imports
import config from '@src/config'

// assets
import { IconTallymark1, TablerIcon } from '@tabler/icons'
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone'
import HomeIcon from '@mui/icons-material/Home'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import { Navigation, INavItem } from '@src/utils/navigation'

const linkSX = {
    display: 'flex',
    color: 'grey.900',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center'
}

type BreadcrumbsProps = Readonly<{
    card?: boolean
    divider?: boolean
    icon?: boolean
    icons?: boolean
    maxItems?: number
    navigation?: Navigation
    rightAlign?: boolean
    separator?: ((props: any) => React.ReactNode) | React.ReactNode
    title?: boolean
    titleBottom?: boolean
}>

// ==============================|| BREADCRUMBS ||============================== //

const Breadcrumbs = ({
    card,
    divider,
    icon,
    icons,
    maxItems,
    navigation,
    rightAlign,
    separator,
    title,
    titleBottom,
    ...rest
}: BreadcrumbsProps) => {
    const theme = useTheme()

    const iconStyle = {
        marginRight: theme.spacing(0.75),
        marginTop: `-${theme.spacing(0.25)}`,
        width: '1rem',
        height: '1rem',
        color: theme.palette.secondary.main
    }

    const [main, setMain] = useState<INavItem>()
    const [item, setItem] = useState<INavItem>()

    // set active item state
    const getCollapse = (menu: INavItem) => {
        if (menu.children) {
            menu.children.filter((collapse) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse as INavItem)
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === config.basename + collapse.url) {
                        setMain(menu)
                        setItem(collapse)
                    }
                }
                return false
            })
        }
    }

    useEffect(() => {
        navigation?.items?.map((menu) => {
            if (menu.type && menu.type === 'group') {
                getCollapse(menu as INavItem)
            }
            return false
        })
    })

    // item separator
    const SeparatorIcon = separator ? (separator as TablerIcon) : IconTallymark1
    const separatorIcon = <SeparatorIcon />

    let mainContent
    let itemContent
    let breadcrumbContent = <Typography />
    let itemTitle = ''
    let CollapseIcon
    let ItemIcon

    // collapse item
    if (main && main.type === 'collapse') {
        CollapseIcon = main.icon ? (main.icon as TablerIcon) : AccountTreeTwoToneIcon
        mainContent = (
            <Typography component={Link} to="#" variant="subtitle1" sx={linkSX}>
                {icons && <CollapseIcon style={iconStyle} />}
                {main.title}
            </Typography>
        )
    }

    // items
    if (item && item.type === 'item') {
        itemTitle = item.title
        ItemIcon = item.icon ? (item.icon as TablerIcon) : AccountTreeTwoToneIcon

        itemContent = (
            <Typography
                variant="subtitle1"
                sx={{
                    display: 'flex',
                    textDecoration: 'none',
                    alignContent: 'center',
                    alignItems: 'center',
                    color: 'grey.500'
                }}
            >
                {icons && <ItemIcon style={iconStyle} />}
                {itemTitle}
            </Typography>
        )

        // main
        if (item.breadcrumbs !== false) {
            breadcrumbContent = (
                <Card
                    sx={{
                        marginBottom: card === false ? 0 : theme.custom.gridSpacing,
                        border: card === false ? 'none' : '1px solid',
                        borderColor: theme.palette.primary.main,
                        background: card === false ? 'transparent' : theme.palette.background.default
                    }}
                    {...rest}
                >
                    <Box sx={{ p: 2, pl: card === false ? 0 : 2 }}>
                        <Grid
                            container
                            direction={rightAlign ? 'row' : 'column'}
                            justifyContent={rightAlign ? 'space-between' : 'flex-start'}
                            alignItems={rightAlign ? 'center' : 'flex-start'}
                            spacing={1}
                        >
                            {title && !titleBottom && (
                                <Grid item>
                                    <Typography variant="h3" sx={{ fontWeight: 500 }}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item>
                                <MuiBreadcrumbs
                                    sx={{
                                        '& .MuiBreadcrumbs-separator': {
                                            width: 16,
                                            ml: 1.25,
                                            mr: 1.25
                                        }
                                    }}
                                    aria-label="breadcrumb"
                                    maxItems={maxItems || 8}
                                    separator={separatorIcon}
                                >
                                    <Typography component={Link} to="/" color="inherit" variant="subtitle1" sx={linkSX}>
                                        {icons && <HomeTwoToneIcon sx={iconStyle} />}
                                        {icon && <HomeIcon sx={{ ...iconStyle, mr: 0 }} />}
                                        {!icon && 'Dashboard'}
                                    </Typography>
                                    {mainContent}
                                    {itemContent}
                                </MuiBreadcrumbs>
                            </Grid>
                            {title && titleBottom && (
                                <Grid item>
                                    <Typography variant="h3" sx={{ fontWeight: 500 }}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                    {card === false && divider !== false && (
                        <Divider
                            sx={{
                                borderColor: theme.palette.primary.main,
                                mb: theme.custom.gridSpacing
                            }}
                        />
                    )}
                </Card>
            )
        }
    }

    return breadcrumbContent
}

export default Breadcrumbs
