import { ReactNode } from 'react'

type BaseCardProps = Readonly<{
    border?: boolean
    boxShadow?: boolean
    children?: ReactNode
    cardContent?: boolean
    contentClass?: string
    contentSX?: Record<string, unknown>
    darkTitle?: boolean
    secondary?: ReactNode
    shadow?: string
    sx?: Record<string, unknown>
    title?: ReactNode
}>

export { default as MainCard } from './MainCard'
export { default as SubCard } from './SubCard'
export { default as SecondaryAction } from './CardsSecondaryAction'
export { default as UpgradePlanCard } from './UpgradePlanCard'
export { default as MenuCard } from './MenuCard'
export { default as AuthCardWrapper } from './AuthCardWrapper'

export * from './Skeleton'

export type { BaseCardProps }
