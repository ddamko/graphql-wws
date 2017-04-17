export interface Bull {
    uid: string;
    codeno: string;
    regname: string;
    codename: string;
    date_of_birth: string;
    type_data: TypeData;
}

export interface TypeData {
    uid: string;
    ptat: number;
    trel: number;
    thrds: number;
    tdtrs: number;
    stat: number;
    str: number;
    bd: number;
    df: number;
    bull: Bull;
}