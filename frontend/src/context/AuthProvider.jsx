import { useState, useEffect, createContext } from 'react';

import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = (props) => {

    const { children } = props;

    const [ cargando, setCargando ] = useState(true); 
    const [ auth, setAuth ] = useState({});

    useEffect(() => {
        const autenticarUser = async() => {
            const token = localStorage.getItem('ahorrapp_token_user')

            if(!token) {
                setCargando(false);
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

            setCargando(false);

        }

        autenticarUser();
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando
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