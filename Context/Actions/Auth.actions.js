
import {AsyncStorage} from 'react-native';
import Toast from "react-native-toast-message"
import baseURL from "../../assets/data/common/baseURL"
//ON SAUVEGARDE LES DONNEES UTILISATEURS GRACE A LA LIBRAIRIE ASYNCSTORAGE DES QU4UN UTILISATEUR SE CONNECTE
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
    fetch(`${baseURL}login/`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            const token = [data.data.id, data.data.grade, data.data.login_session_token]; // ON RECUPERE L'ID PUIS LA GRADE QUI PEUT ETRE ADMINISTRATOR OWNER CUSTOMER 
            AsyncStorage.setItem("jwt", token)
            dispatch(setCurrentUser(token, user))
        } else {
           logoutUser(dispatch)
        }
    })
    .catch((err) => {
        Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Please provide correct credentials",
            text2: ""
        });
        logoutUser(dispatch)
    });
};

export const getUserProfile = (id) => {
    fetch(`${baseURL}users/${id}`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export const logOutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        userProfile: user
    }
}