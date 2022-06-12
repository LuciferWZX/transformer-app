import {AdvanceResponse} from "@/types/request";
import request from "@/utils/request";
import {FormParams, FormType} from "@/models/formModelType";

//查询首页的表单
export const getFormList = async (params: FormParams):AdvanceResponse<FormType[]> => {
    return await request(`/form`, {
        params: params,
    });
};
//新建一个表单
export const createForm = async (name: string):AdvanceResponse<FormType|undefined> => {
    return await request(`/form`, { method: 'post', data: { name } });
};