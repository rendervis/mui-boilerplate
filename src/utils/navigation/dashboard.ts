// assets
import { IconDashboard } from '@tabler/icons';
import { Page } from '.';

// constant
const icons = { IconDashboard };



// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard: Page = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
