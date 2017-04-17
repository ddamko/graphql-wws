import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const bullsQuery: DocumentNode = gql`
    query ($breed: String!, $new_type: String!) {
      bulls(breed: $breed, new_type: $new_type) {
        codeno
        codename
        uid
        regname
        type_data {
            ptat
            str
            stat
        }
      }
    }
`;