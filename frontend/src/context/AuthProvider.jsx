import { useState, useEffect, createContext } from 'react';

import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = (props) => {

    const { children } = props;

    const [ auth, setAuth ] = useState({})

    useEffect(() => {
        const autenticarUser = async() => {
            const token = localStorage.getItem('ahorrapp_token_user')

            if(!token) {
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }

            try {
                const { data } = await clienteAxios('/user/perfil', config)

                setAuth(data.user)
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({});
            }

        }

        autenticarUser();
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export  {
    AuthProvider
}

export default AuthContext;