let LocalUser = JSON.parse(window.localStorage.getItem('access_token')) || ""
console.log(typeof LocalUser)
window.api = {
    token: LocalUser,
    request: function (method, url, data, params, headers) {
        if (typeof data == 'undefined' || data === null) {
            data = {}
        }
        if (typeof params == 'undefined' || params === null) {
            params = {}
        }
        if (typeof headers == 'undefined' || headers === null) {
            headers = {}
        }
        let head = {
            Authorization: 'Bearer ' + this.token,
            "Content-Type": "application/json;charset=utf-8"
        }

        return axios({
            url,
            data,
            method,
            params,
            headers: head
        }).then(response => {
            return response.data
        }).catch(error => {
            throw error
        })
    },

    delete: async function (url, data, params, headers) {
        return this.request('delete', url, data, params, headers)
    },

    get: async function (url, params, headers, data) {
        return this.request('get', url, JSON.stringify(data), params, headers)
    },

    post: async function (url, data, params, headers) {
        return this.request('post', url, data, params, headers)
    },

    put: async function (url, data, params, headers) {
        return this.request('put', url, data, params, headers)
    },
}
