import { gql } from "@apollo/client"


const GET_CATEGORIES = gql`
    query getCategories {
        categories {
            title: id
            items {
                id
                imageUrl
                name
                price
            }
        }
    }`


export { GET_CATEGORIES }
