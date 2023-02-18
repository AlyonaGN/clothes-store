import { graphql } from "../gql"


const GET_CATEGORIES = graphql(/* GraphQL */`
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
    }
`)

export { GET_CATEGORIES }
