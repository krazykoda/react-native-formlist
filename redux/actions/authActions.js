import firebase from '../../firebase/firebase'


export function createEmailAccount(email, password) {
    return async (dispatch) => {
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(dispatcher("log_in",user))
        }catch (e) {
            dispatch(dispatcher("error", {register: e.message}))
        }
        
    }
}

export function login(email, password) {
    return async (dispatch) => {
        dispatch(dispatcher("log_in", {}))
    }
}

export function logout() {
    return async (dispatch) => {
        await firebase.auth().signOut()
    }
}



export function dispatcher(type, payload) {
    return payload? {
        type,
        payload
    } : {
        type,
    }
}