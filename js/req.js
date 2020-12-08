function req(url, options = {}) {
    return fetch(url, options).then(res => {
        if (res.status == 200) {
            return res.json()
        }
        return function err(params) {
            throw new Error()
        }
    })
}
// "https://api.github.com/users"
export function get(url) {
    return req(url)
}