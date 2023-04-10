// assets
import { IconBrandChrome } from '@tabler/icons';
import { Other } from '.';

// constant
const icons = { IconBrandChrome };

// ==============================|| SAMPLE PAGE ||============================== //

const other: Other = {
    id: 'sample-docs-roadmap',
    title: 'Sample Docs',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
