import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${breakpoints.tablet}) {
        width: 70%;
    }
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    @media (max-width: ${breakpoints.tablet}) {
        padding: 5px 7px;
    }
`
