import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const channelStore = createSlice({
    name: "channel",
    initialState: {
        chaannelList: []
    },
    reducers: {
        setChannels (state, action) {
            state.chaannelList = action.payload
        }
    }
})

const { setChannels } = channelStore.actions

const fetchChannelList = () => {
    return async (disoatch) => {
        const res = await axios.get("http://geek.itheima.net/v1_0/channels")
        disoatch(setChannels(res.data.data.channels))
    }
}

export { fetchChannelList }

const reducer = channelStore.reducer

export default reducer