export interface Ipermissions {
    getUsers1: IgetUsers1;
    getUsers2: IgetUsers2;
}


interface IgetUsers1 {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface IgetUsers2 {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
export interface Iusers {
    [index: number]:
    {
        traineeEmail: string;
        reviewerEmail: string;
    };
}