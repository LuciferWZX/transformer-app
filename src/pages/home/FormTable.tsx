import React, {FC} from "react";
import {FormTableBox} from "@/pages/home/style";
import {ArtColumn, BaseTable} from "ali-react-table";
import {useLoading, useModel} from "foca";
import {formModel} from "@/models/formModel";
import {FormType, Status} from "@/models/formModelType";
import dayjs from "dayjs";
import {Button, Space, Spin, Tag} from "antd";
import { CheckCircleFilled, ClockCircleFilled, EllipsisOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
const FormTable:FC = () => {
    const formList = useModel(formModel,state => state.formList)
    const keyword = useModel(formModel,state => state.formParams.key)
    const loading = useLoading(formModel.queryList)
    const columns:ArtColumn[]=[
        {code:'name',name:"表单名称",
            render(value:string): React.ReactNode {
                return (
                    <Highlighter
                        highlightClassName="highlight-words"
                        searchWords={[keyword]}
                        autoEscape={true}
                        textToHighlight={value}
                    />
                )
            }},
        {code:'creator',name:"发布者"},
        {code:'versions',name:"版本数",width:80,getValue:(record:FormType)=> record.versions.length},
        {code:'updated_at',name:"更新时间",width:150,getValue:(record:FormType)=> dayjs(record.updated_at).format("YYYY-MM-DD HH:mm")},
        {code:'status',name:"状态",width:120,
            render(value: any): React.ReactNode {
                if(value === Status.Draft){
                    return (
                        <Tag icon={<ClockCircleFilled />} color="default">
                            草稿待发布
                        </Tag>
                    )
                }
                if(value === Status.Published){
                    return (
                        <Tag icon={<CheckCircleFilled />} color="success">
                            已发布
                        </Tag>
                    )
                }
            }},
        {code:'',name:"操作",width:200,
            render(value: any, row: any, rowIndex: number): React.ReactNode {
                return (
                    <Space>
                        <Button size={"small"} type={"link"}>预览</Button>
                        <Button size={"small"} type={"link"}>查看详情</Button>
                        <Button type="link" shape="circle" icon={<EllipsisOutlined />} size={"small"} />
                    </Space>
                )
            }}
    ]
    return(
        <FormTableBox>
           <Spin spinning={loading}>
               <BaseTable dataSource={formList} columns={columns} />
           </Spin>
        </FormTableBox>
    )
}
export default FormTable