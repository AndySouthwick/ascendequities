import gql from 'graphql-tag'

export const createNewBLurb = gql`
  mutation(
    $name: String!
    $blurb: String!
  ){
    createStudentsblurbs (
      name: $name
      blurb: $blurb
    ){
      id
    }
  }
`