// assets
import { IconUser } from '@tabler/icons'
import { Page } from '.'

// constant
const icons = { IconUser }

// ==============================|| Customers MENU ITEMS ||============================== //

const customers: Page = {
    id: 'account',
    title: 'Account',
    type: 'group',
    children: [
        {
            id: 'account',
            title: 'Account',
            type: 'item',
            url: '/account',
            icon: icons.IconUser,
            breadcrumbs: false
        }
    ]
}

export default customers
