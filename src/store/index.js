import { configureStore } from "@reduxjs/toolkit"

// 导入子模块reducer
import  counterReducer from './modules/counterStore'
import  channelReducer from './modules/channelStore'
import  foodsReducer from './modules/takeaway'
// // 持久化
// import { persistStore, persistReducer } from 'redux-persist'; 
// import storage from 'redux-persist/lib/storage'; 
// // 定义持久化配置 
// const persistConfig = { key: 'root', storage, }; 

// // 创建持久化reducer 
// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer,
        foods: foodsReducer
    }
})

export default store;