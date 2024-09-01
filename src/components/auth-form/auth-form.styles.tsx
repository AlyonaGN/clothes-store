import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-bottom: 40px;
    }
`

export const AuthTitle = styled.h2`
    margin: 10px 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`
