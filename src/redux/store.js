import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducer
import Users from './Reducer/user'
import LoginUserInfo from './Reducer/loginUserInfo'
import setInfo from './Reducer/setInfo'
// 存储机制，当前使用sessionStorage, 可换成localStorage
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: 'root', // 必须有的  
    storage: storageSession, // 缓存机制  
    blacklist: [] //reducer 里不持久化的数据,除此外均为持久化数据  
    // whitelist: ['loginStatus'] // reducer 里持久化的数据,除此外均为不持久化数据
}


const AllReducer = combineReducers({ Users, LoginUserInfo, setInfo })

const persistedReducer = persistReducer(persistConfig, AllReducer)




//  创建暴露 = 普通 
// export default createStore(AllReducer, applyMiddleware(thunk))



let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
export default store