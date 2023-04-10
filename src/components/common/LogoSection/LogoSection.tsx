import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from '@src/config'
import { menuOpen } from '@store/slices/menu/actions'
import { useAppDispatch } from '@store/index'
import { selectId } from '@store/slices/menu/selectors'

// assets
import Logo from './Logo'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const dispatch = useAppDispatch()
    const defaultId = useSelector(selectId)

    const handleMenuOpen = () => {
        dispatch(menuOpen({ id: defaultId }))
    }

    return (
        <ButtonBase disableRipple onClick={handleMenuOpen} component={Link} to={config.defaultPath}>
            <Logo />
        </ButtonBase>
    )
}

export default LogoSection
