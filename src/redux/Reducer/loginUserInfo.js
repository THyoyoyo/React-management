let initUserInfo = {
    hasLogin: false,
    info: {}
}

export default function LoginUserInfo(pre = initUserInfo, value) {
    let { type, data } = value
    if (type === 'set2') {
        return { ...pre, ...data }
    } else {
        return pre
    }
}