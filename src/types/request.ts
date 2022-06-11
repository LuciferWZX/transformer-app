export interface ServerResult<T>{
    code:number
    msg:string
    total_count?:number
    data:T
}
export enum ErrorType{
    Timeout ="Timeout"
}
//更高级的返回结果类型
export type AdvanceResponse<T> = Promise<ServerResult<T>|undefined>