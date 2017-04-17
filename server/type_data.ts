import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt } from 'graphql';
import Bull from './bull';
import pool from './db';

const TypeData = new GraphQLObjectType({
    name: 'TypeData',
    fields: () => ({
        uid: {
            type: GraphQLString
        },
        ptat: {
            type: GraphQLFloat,
            resolve(typedata) {
                return Math.round(typedata.ptat * 100) / 100
            }
        },
        trel: {
            type: GraphQLInt
        },
        thrds: {
            type: GraphQLInt
        },
        tdtrs: {
            type: GraphQLInt
        },
        stat: {
            type: GraphQLFloat,
            resolve(typedata) {
                return Math.round(typedata.stat * 100) / 100
            }
        },
        str: {
            type: GraphQLFloat,
            resolve(typedata) {
                return Math.round(typedata.str * 100) / 100
            }
        },
        bd: {
            type: GraphQLFloat,
            resolve(typedata) {
                return Math.round(typedata.bd * 100) / 100
            }
        },
        df: {
            type: GraphQLFloat,
            resolve(typedata) {
                return Math.round(typedata.df * 100) / 100
            }
        },
        bull: {
            type: Bull,
            resolve(root, args) {
                const query = pool.request().query(`
                        SELECT 
                            [UID] AS uid, 
                            [CODENO] AS codeno, 
                            [REGNAME] AS regname, 
                            [CODENAME] AS codename,
                            [DOB] as date_of_birth
                        FROM Megadairy WHERE [UID] = '${root.uid}'
                    `).then(result => {
                        return result.recordset[0]
                    });

                return query;
            }
        }
    })
});

export default TypeData;