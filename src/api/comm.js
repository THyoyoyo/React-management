import request from '../utils/request'


// 游戏列表
export function productInfoList(data) {
    return request({
        url: '/product/infoList',
        method: 'get',
        params: data
    })
}


// 大厅列表搜索
export function search(data) {
    return request({
        url: '/goods/search',
        method: 'POST',
        data
    })
}
// 登陆与注册 统一接口
export function loginOrRegister(data) {
    return request({
        url: '/loginOrRegister',
        method: 'POST',
        data
    })
}


// 获取用户信息 
export function getInfo(data) {
    return request({
        url: '/user/getInfo',
        method: 'GET',
        data
    })
}

// OSS文件上传获取Token
export function getStsToken(data) {
    return request({
        url: '/oss/getStsToken',
        method: 'GET',
        data
    })
}


// 个人信息-修改
export function saveInfo(data) {
    return request({
        url: '/user/saveInfo',
        method: 'POST',
        data
    })
}


// 退出登录
export function logout() {
    return request({
        url: '/logout',
        method: 'GET',
    })
}
// 获取公告列表
export function categoryClass(data) {
    return request({
        url: `/article/category/${data}`,
        method: 'GET',
    })
}

// 获取公告详情
export function categorydetail(data) {
    return request({
        url: `/article/detail/${data}`,
        method: 'GET',
    })
}