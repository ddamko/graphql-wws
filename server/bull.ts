import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import TypeData from './type_data';
import pool from './db';

const Bull = new GraphQLObjectType({
    name: 'Bull',
    fields: () => ({
            uid: {
                type: GraphQLString
            },
            codeno: {
                type: GraphQLString
            },
            regname: {
                type: GraphQLString,
                resolve(bull) {
                    return bull.regname.trim();
                }
            },
            codename: {
                type: GraphQLString,
                resolve(bull) {
                    return bull.codename.trim();
                }
            },
            date_of_birth: {
                type: GraphQLString
            },
            type_data: {
                type: TypeData,
                resolve(root, args) {
                    const query = pool.request().query(`
                        SELECT 
                            [UID] AS uid, 
                            [PTAT] AS ptat, 
                            [TREL] AS trel, 
                            [THRDS] AS thrds,
                            [TDTRS] as tdtrs,
                            [STAT] as stat,
                            [STR] as str,
                            [BD] as bd,
                            [DF] as df
                        FROM TYPE WHERE [UID] = '${root.uid}';
                    `).then(result => {
                        return result.recordset[0]
                    });

                    return query;
                }
            }
        })
});

export default Bull;