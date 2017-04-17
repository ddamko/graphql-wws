import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, graphql } from 'graphql';
import Bull from './bull';
import pool from './db';

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            bulls: {
                type: new GraphQLList(Bull),
                args: {
                    breed: { type: GraphQLString },
                    new_type: { type: GraphQLString }
                },
                resolve(root, {breed, new_type}) {
                    const query = pool.request().query(`
                        SELECT 
                            [UID] AS uid, 
                            [CODENO] AS codeno, 
                            [REGNAME] AS regname, 
                            [CODENAME] AS codename,
                            [DOB] as date_of_birth
                        FROM Megadairy WHERE [BREED] = '${breed}' 
                            AND [NEW] = '${new_type}'
                            AND [CODENO] IS NOT NULL
                        ORDER BY [CODENO];
                    `).then(result => {
                        return result.recordset
                    });

                    return query;

                }
            },
            bull: {
                type: Bull,
                args: {
                    uid: { type: GraphQLString }
                },
                resolve(root, {uid}) {
                    const query = pool.request().query(`
                        SELECT 
                            [UID] AS uid, 
                            [CODENO] AS codeno, 
                            [REGNAME] AS regname, 
                            [CODENAME] AS codename,
                            [DOB] as date_of_birth
                        FROM Megadairy WHERE [UID] = '${uid}';
                    `).then(result => {
                        return result.recordset[0];
                    });

                    return query;
                }
            }
        }
    }
});

export const Schema = new GraphQLSchema({
    query: Query
});