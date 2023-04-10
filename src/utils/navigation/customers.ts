// assets
import { IconUsers } from '@tabler/icons'
import { Page } from '.'

// constant
const icons = { IconUsers }

// ==============================|| Customers MENU ITEMS ||============================== //

const customers: Page = {
    id: 'customers',
    title: 'Customers',
    type: 'group',
    children: [
        {
            id: 'customer',
            title: 'Customers',
            type: 'item',
            url: '/customers',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
}

export default customers
