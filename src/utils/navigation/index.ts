import { ReactNode } from 'react'

// project imports
import dashboard from './dashboard'
import customers from './customers'
import account from './account'
import pages from './pages'
import utilities from './utilities'
import other from './other'

// assets
import { TablerIcon } from '@tabler/icons'

type ItemTypes = 'item' | 'collapse' | 'group'

interface BaseItem {
    id: string
    title: string
    type: ItemTypes
    icon?: ReactNode | TablerIcon
    caption?: string
}
interface INavItem extends BaseItem {
    url?: string
    breadcrumbs?: boolean
    target?: boolean
    external?: boolean
    disabled?: boolean
    children?: INavItem[]
}

type Pages = INavItem
type Page = INavItem
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, customers, account, pages, utilities, other]
}

export default menuItems
type Navigation = typeof menuItems

export type { Pages, Page, Navigation, INavItem }
