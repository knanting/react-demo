import axios from "./http";

//获取所有评论
export const GET_COMMENTS = (params) => axios.get('/comments',params)
//获取单个id评论
export const GET_ONECOMMENTS = (id) => axios.get(`/comments/${id}`)

//获取banner
export const GET_BANNERS = (params) => axios.get('/banners',params)