import { lazy } from 'react'

// project imports
import { MinimalLayout } from '@components/common/Layout'
import { Loadable } from '@components/ui/Loadable'

// login routing
const AuthLogin = Loadable(lazy(() => import('@components/views/auth/login')))
const AuthSignUp = Loadable(lazy(() => import('@components/views/auth/signup')))

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/signup',
            element: <AuthSignUp />
        }
    ]
}

export default AuthenticationRoutes
