import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`
