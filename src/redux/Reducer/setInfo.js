const initDataUser = {
    getUser: {}
}

export default function setInfo(pre = initDataUser, value) {
    let { type, data } = value
    if (type === 'set1') {
        return { ...pre, getUser: { ...pre.getUser, ...data } }
    } if (type == 'outUser_1') {
        return {}
    } else {
        return pre
    }
}