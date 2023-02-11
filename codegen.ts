import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4800/graphql',
    documents: ['src/queries/*.ts', '!src/gql/**/*'],
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
        },
    },
}

export default config
