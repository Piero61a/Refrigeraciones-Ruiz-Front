import { User } from "../interfaces";

export const checkAuth = () => {
    const user = (localStorage.getItem('user'));
    const userParse: User = JSON.parse(user || '{}')
    if (!userParse.token) {
        return false;
    }
    else {
        return true
    }
}