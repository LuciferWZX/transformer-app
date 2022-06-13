import {FC} from "react";
import {SearchBarBox} from "@/components/modal/style";
import {Input} from "antd";

const SearchBar:FC = () => {
    return(
        <SearchBarBox>
            <Input prefix={<i className={'iconfont icon-search'} />} allowClear={true} size={"small"} placeholder={'搜索'} />
        </SearchBarBox>
    )
}
export default SearchBar