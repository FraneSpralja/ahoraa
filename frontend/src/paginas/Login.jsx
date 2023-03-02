import { Link } from "react-router-dom"
// Style
import styles from "../assets/style/authLayout.module.css"

const Login = () => {
    return (
        <>
                <div className={styles.loginHeader}>
                    <h1 
                    className={styles.loginHeader_title}
                        >Bienvenido a <span>Ahorrapp</span>, <br /> 
                        inicia sesión y empieza a ahorrar
                    </h1>
                </div>
                <div className={styles.loginBody}>
                    <form action="">
                        <div className={styles.formBox}>
                            <label 
                            className={styles.formBox_label}
                            >
                                Email <span className="text-red-300">*</span>
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="text" 
                            placeholder="usuario@correo.com"
                            />
                        </div>
                        <div className={styles.formBox}>
                            <label 
                            className={styles.formBox_label}
                            >
                                Password <span className="text-red-300">*</span>
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="password" 
                            placeholder="Tu password"
                            />
                        </div>
                        <div className={styles.formBox}>
                            <input 
                            type="submit" 
                            value="Iniciar Sesión"
                            className={styles.btnSubmit}
                            />
                        </div>
                        <div className={styles.formBox}>
                            <Link 
                            className={styles.links_submit} 
                            to="/registrar"
                            >
                                Únete a los que ahorran, regístrate
                            </Link>
                            <Link 
                            className={styles.links_submit} 
                            to="/olvide-password"
                            >
                                Recupera tu password
                            </Link>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default Login