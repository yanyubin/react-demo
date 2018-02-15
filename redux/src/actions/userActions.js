export function setName(name) {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "SET_NAME",
    //             payload: name
    //         })
    //     }, 200)
    // }
    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 200)
        })
    }
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}