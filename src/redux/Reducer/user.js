let initUserData = [
    {
        id: '1',
        name: '白居易',
        age: 32,
        sex: '男',
        remark: "他是一个男的"
    },
]

export default function Users(pre = initUserData, data) {
    let { type, value } = data
    switch (type) {
        case 'add':
            return [value, ...pre]
        case 'updata':
            return [...value]
        case 'del':
            return [...value]
        default:
            return pre
    }
}