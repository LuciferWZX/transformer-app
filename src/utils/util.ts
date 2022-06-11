import { Jwt } from "@/types/common"
import { pinyin } from "pinyin-pro"
//解析token中的数据
export function parseJwt(token: string): Jwt {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )
    
    return JSON.parse(jsonPayload)
}

//根据用户名生成对应的颜色以及前两个字符
export function handleUsername(username:string):{str:string,color:string}{
    let str: string;
    let color=""
    let first = username[0]
    const second = username[1] ?? ""
    first = pinyin(first, { pattern: 'first', toneType: 'none' });
    console.log(first)
    if(/[a-d]|[A-D]/g.test(first)){
        color="#2D5DEA"
    }
    if(/[e-h]|[E-H]/g.test(first)){
        color="#604DC3"
    }
    if(/[i-l]|[I-L]/g.test(first)){
        color="#EB008B"
    }
    if(/[m-p]|[M-P]/g.test(first)){
        color="#F05F5C"
    }
    if(/[q-t]|[Q-T]/g.test(first)){
        color="#FBAE3B"
    }
    if(/[u-x]|[U-X]/g.test(first)){
        color="#34B199"
    }
    if(/[y-z]|[Y-Z]/g.test(first)){
        color="#00875A"
    }
    str = first+second
    return {
        str:str,
        color:color
    }
}