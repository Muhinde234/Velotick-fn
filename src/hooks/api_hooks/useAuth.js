import { useMutation } from "@tanstack/react-query";
import {login} from "../../api/auth/authAPI";

export const useLogin = () => {
    return useMutation({
        mutationFn: async (credentials) => {
            const data = await login(credentials);
            ///// Hatari kweli
            const {token} = data;
        }
    })
}