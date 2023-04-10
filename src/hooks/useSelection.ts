import { useCallback, useEffect, useState } from 'react'

// ==============================| Handles Tables Paginatio |============================== //

export const useSelection = (items: string[] = []) => {
    const ids = items.map((str) => {
        return parseInt(str)
    })
    const [selected, setSelected] = useState<number[]>([])

    useEffect(() => {
        setSelected([])
    }, [items])

    const handleSelectAll = useCallback(() => {
        setSelected([...ids])
    }, [items])

    const handleSelectOne = useCallback((item: number) => {
        setSelected((prevState) => [...prevState, item])
    }, [])

    const handleDeselectAll = useCallback(() => {
        setSelected([])
    }, [])

    const handleDeselectOne = useCallback((item: number) => {
        setSelected((prevState) => {
            return prevState.filter((_item) => _item !== item)
        })
    }, [])

    return {
        handleDeselectAll,
        handleDeselectOne,
        handleSelectAll,
        handleSelectOne,
        selected
    }
}
