export interface ServerResult<T>{
    code:number,
    msg:string,
    data:T
}
export enum ErrorType{
    Timeout ="Timeout"
}