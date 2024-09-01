import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
`

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    width: 20%;
    &:last-child {
        width: 15%;
    }
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 12px;
    }
`

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    margin-bottom: 30px;
`
