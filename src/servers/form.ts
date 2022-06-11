import {AdvanceResponse} from "@/types/request";
import request from "@/utils/request";
import {FormParams, FormType} from "@/models/formModelType";

//查询首页的表单
export const getFormList = async (params: FormParams):AdvanceResponse<FormType[]> => {
    return request(`/form`, {
        params: params,
    });
};