// 编写store

import { createSlice }  from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
    name: 'foods',
     initialState: {
        foodsList: [],
        // 菜单激活下标值
        
     },
     reducers: {
        setFoodsList (state, action) {
            state.foodsList = action.payload
        }
     }
})

// 异步
const { setFoodsList } = foodsStore.actions  
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res =  await axios.get("http://localhost:3004/takeaway")
        console.log(res.data.data)
        dispatch(setFoodsList(res.data.data))
    }
}

export { fetchFoodsList }

const reducer = foodsStore.reducer

export default reducer