export interface FormParams{
    key: string; // 搜索关键词目前只支持表单名称
    page: number; // 第几页的数据 默认第一页
    pageNum: number; // 每页多少数据 默认10条 最大不超过100条
}
export interface BaseFormType{
    created_at:string
    id:number
    status:number
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