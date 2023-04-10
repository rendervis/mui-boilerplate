import { useEffect, useRef } from 'react'

// ==============================| ELEMENT REFERENCE HOOKS  |============================== //

const useScriptMountedRef = () => {
    const scripted = useRef(true)

    useEffect(
        () => () => {
            scripted.current = false
        },
        []
    )

    return scripted
}

export default useScriptMountedRef
