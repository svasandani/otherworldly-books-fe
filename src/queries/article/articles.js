import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      categories {
        id
        name
      }
      image_url
    }
  }
`;

export default ARTICLES_QUERY;
