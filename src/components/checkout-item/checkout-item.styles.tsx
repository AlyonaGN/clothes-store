import styled from 'styled-components'
import { breakpoints } from '../../styles-utils'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 13px;
        padding: 5px 0;
    }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-right: 10px;
    }
`

export const BaseSpan = styled.span`
    width: 23%;
    padding-right: 4px;
`

export const Quantity = styled(BaseSpan)`
    display: flex;
`

export const Arrow = styled.div`
    cursor: pointer;
`

export const Value = styled.span`
    margin: 0 10px;
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`
