import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 30px auto;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }
`
