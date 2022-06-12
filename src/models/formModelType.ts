export interface FormParams{
    key: string; // 搜索关键词目前只支持表单名称
    page: number; // 第几页的数据 默认第一页
    page_size: number; // 每页多少数据 默认10条 最大不超过100条
}
export enum Status{
    // 表单状态 0: 草稿 1: 已发布
    Draft,
    Published
}
export interface BaseFormType{
    created_at:string
    id:number
    status:Status
    updated_at:string
}
export interface FormType extends BaseFormType{
    creator:string
    name:string
    reviser:string
    versions:FormVersion[]
}
export interface FormVersion extends BaseFormType{
    editor:string
    fid:number
    payload:string
    publisher:string
    snapshot:string
    version:string
}