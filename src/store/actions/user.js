import * as actions from './actionTypes'

//const URL = 'http://localhost:3030'

const URL = 'https://coinperfect.herokuapp.com'

export const updateProfileStart = () => {
    return {
        type: actions.UPDATE_PROFILE_START,
    }
}
export const updateProfileSuccess = (data) => {
    return {
        type: actions.UPDATE_PROFILE_SUCCESS,
        data,
    }
}
export const updateProfileFailed = (err) => {
    return {
        type: actions.UPDATE_PROFILE_FAILED,
        err,
    }
}
export const getAdminSuccess = (data) => {
    return {
        type: actions.GET_ADMIN_SUCCESS,
        data
    }
}
export const getUsersStart = () => {
    return {
        type: actions.UPDATE_PROFILE_START,
    }
}
export const getUsersSuccess = (data) => {
    return {
        type: actions.UPDATE_PROFILE_SUCCESS,
        data,
    }
}
export const getUsersFailed = (err) => {
    return {
        type: actions.UPDATE_PROFILE_FAILED,
        err,
    }
}
export const getUserHistoryStart = () => {
    return {
        type: actions.USER_HISTORY_START,
    }
}
export const getUserHistorySuccess = (data) => {
    return {
        type: actions.USER_HISTORY_SUCCESS,
        data,
    }
}
export const getUserHistoryFailed = (err) => {
    return {
        type: actions.USER_HISTORY_FAILED,
        err,
    }
}

export const investNowStart = () => {
    return {
        type: actions.INVEST_NOW_START,
    }
}
export const investNowSuccess = (data) => {
    return {
        type: actions.INVEST_NOW_SUCCESS,
        data,
    }
}
export const investNowApprovalSuccess = (data) => {
    return {
        type: actions.INVEST_NOW_APPROVAL_SUCCESS,
        data,
    }
}

export const investNowFailed = (err) => {
    return {
        type: actions.INVEST_NOW_FAILED,
        err,
    }
}
export const withdrawNowStart = () => {
    return {
        type: actions.WITHDRAW_NOW_START,
    }
}
export const withdrawNowSuccess = (data) => {
    return {
        type: actions.WITHDRAW_NOW_SUCCESS,
        data,
    }
}

export const withdrawNowApprovalSuccess = (data) => {
    return {
        type: actions.WITHDRAW_NOW_APPROVAL_SUCCESS,
        data,
    }
}

export const withdrawNowFailed = (err) => {
    return {
        type: actions.WITHDRAW_NOW_FAILED,
        err,
    }
}

export const initUpdateProfile = (updateProfileData, token) => {
    return (dispatch) => {
        dispatch(updateProfileStart())

        let graphqlQuery = {
            query: `
                mutation { createUpdateProfile(updateProfileData: {
                        username: "${updateProfileData.username}",
                        email: "${updateProfileData.email}",
                        oldEmail: "${updateProfileData.oldEmail}",
                        password: "${updateProfileData.confirmPassword}",
                        fullname: "${updateProfileData.fullname}",
                        city: "${updateProfileData.city}",
                        country: "${updateProfileData.country}",
                        phone: "${updateProfileData.phone}",
                        bitcoinAccount: "${updateProfileData.bitcoin}",
                        ethereumAccount: "${updateProfileData.ethereum}"
                    }){
                        
                        fullname
                        username
                        city
                        country
                        phone
                        bitcoinAccount
                        ethereumAccount
                        email
                        updatedAt
                        createdAt
                    }
                }
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(updateProfileFailed(resData.errors[0].message))
                }

                dispatch(updateProfileSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(updateProfileFailed(err))
            })
    }
}
export const initGetUserHistory = (token) => {
    return (dispatch) => {
        dispatch(getUserHistoryStart())

        let graphqlQuery = {
            query: `{
                getUserHistory {
                    getDepositHistory {                    
                        historyNO
                        planName
                        amount
                        currency
                        updatedAt
                    }

                    getWithdrawalHistory {
                        historyNO
                        amount
                        currency
                        updatedAt
                    }
                }
            }`,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(getUserHistoryFailed(resData.errors[0].message))
                }

                dispatch(getUserHistorySuccess(resData.data.getUserHistory))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getUserHistoryFailed(err))
            })
    }
}
export const initGetUsers = (token) => {
    return (dispatch) => {
        dispatch(getUsersStart())

        let graphqlQuery = {
            query: `{
                getUsers {
                    getUser {                    
                        userNO
                        username
                        email
                        status
                        updatedAt
                    }
                }
            }`,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(getUsersFailed(resData.errors[0].message))
                }

                dispatch(getUsersSuccess(resData.data.getUsers.getUser))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getUsersFailed(err))
            })
    }
}
export const initGetAdmin= (token) => {
    return (dispatch) => {
        dispatch(getUsersStart())

        let graphqlQuery = {
            query: `{
                getAdmin {
                    bitcoinAccount
                    ethereumAccount
                    username
                    updatedAt
                }
            }`,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(getUsersFailed(resData.errors[0].message))
                }

                dispatch(getAdminSuccess(resData.data.getAdmin))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getUsersFailed(err))
            })
    }
}

export const initWithdrawNow = (withdrawNowData, token) => {
    return (dispatch) => {
        dispatch(withdrawNowStart())

        let graphqlQuery = {
            query: `
                mutation { createWithdrawNow(withdrawNowData: {
                        password: "${withdrawNowData.password}",
                        amount: "${withdrawNowData.amount}",
                        currency: "${withdrawNowData.currency}",
                    }){
                        _id
                        amount
                        currency
                        creator {
                            username
                        }
                        createdAt
                        updatedAt
                    }
                }
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(withdrawNowFailed(resData.errors[0].message))
                }

                dispatch(withdrawNowSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(withdrawNowFailed(err))
            })
    }
}
export const initInvestNow = (investNowData, token) => {
    return (dispatch) => {
        dispatch(investNowStart())
        //const formData = new FormData()
        // if (investNowData.file) {
        //     console.log('the file')
        //     formData.append('image', investNowData.file['0'])
        // }

        // fetch(URL + '/api/post-image', {
        //     method: 'PUT',
        //     headers: {
        //         Authorization: 'Bearer ' + token,
        //     },
        //     body: formData,
        // })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((result) => {
        //         const proofUrl = result.filePath

                let graphqlQuery = {
                    query: `
                mutation { createInvestNow(investNowData: {
                        selectedPlan: "${investNowData.selectedPlan}",
                        amount: "${investNowData.amount}",
                        currency: "${investNowData.currency}",
                    }){
                        _id
                        amount
                        planName
                        currency
                        creator {
                            username
                        }
                        createdAt
                        updatedAt
                    }
                }
            `,
                }

                return fetch(URL + '/api/graphql', {
                    method: 'POST',
                    body: JSON.stringify(graphqlQuery),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                })

            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(investNowFailed(resData.errors[0].message))
                }

                dispatch(investNowSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(investNowFailed(err))
            })
    }
}

export const initInvestNowApproval = (id, token) => {
    return (dispatch) => {
        dispatch(investNowStart())

        let graphqlQuery = {
            query: `
                mutation { createInvestNowApproval(PostId: {
                    id: "${id}"
                }){
                        _id
                        amount
                        currency
                        creator {
                            username
                        }
                        updatedAt
                    }
                },
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(investNowFailed(resData.errors[0].message))
                }

                dispatch(
                    investNowApprovalSuccess(
                        resData.data.createInvestNowApproval
                    )
                )
            })
            .catch((err) => {
                console.log(err)
                dispatch(investNowFailed(err))
            })
    }
}
export const initWithdrawNowApproval = (id, token) => {
    return (dispatch) => {
        dispatch(withdrawNowStart())

        let graphqlQuery = {
            query: `
                mutation { createWithdrawNowApproval(PostId: {
                    id: "${id}"
                }){
                        _id
                        amount
                        currency
                        creator {
                            username
                        }
                        updatedAt
                    }
                },
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(withdrawNowFailed(resData.errors[0].message))
                }

                dispatch(
                    withdrawNowApprovalSuccess(
                        resData.data.createwithdrawNowApproval
                    )
                )
            })
            .catch((err) => {
                console.log(err)
                dispatch(withdrawNowFailed(err))
            })
    }
}
