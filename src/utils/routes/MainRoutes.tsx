import { lazy } from 'react'

// project imports
import { MainLayout } from '@components/common/Layout'
import { Loadable } from '@components/ui/Loadable'

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../../components/views/dashboard/Default/Dashboard')))

// customers routing
const Customers = Loadable(lazy(() => import('../../components/views/customers')))

// account routing
const Account = Loadable(lazy(() => import('../../components/views/account')))

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('@components/views/utilities/Typography')))
const UtilsShadow = Loadable(lazy(() => import('@components/views/utilities/Shadow')))
const UtilsMaterialIcons = Loadable(lazy(() => import('@components/views/utilities/MaterialIcons')))
const UtilsTablerIcons = Loadable(lazy(() => import('@components/views/utilities/TablerIcons')))

// sample page routing
const SamplePage = Loadable(lazy(() => import('@components/views/sample-page')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'customers',
            element: <Customers />
        },
        {
            path: 'account',
            element: <Account />
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
}

export default MainRoutes
