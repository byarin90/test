import axios from "axios"
export const API_URL = 'https://project-yarin.herokuapp.com'
    //for get method
export const doApiGet = async(_url) => {
        try {
            let resp = await axios.get(_url, {
                headers: {
                    'content-type': "application/json"
                }
            })
            return resp;
        } catch (err) {
            throw err;
        }
    }
    //post put delete patch
export const doApiMethod = async(_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            data: JSON.stringify(_body),
            headers: {
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}