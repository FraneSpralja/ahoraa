import { Link } from "react-router-dom"
// Style
import styles from "../assets/style/authLayout.module.css"

const OlvidePassword = () => {
    return (
        <>
                <div className={styles.loginHeader}>
                    <h1 
                    className={styles.loginHeader_title}
                        >Recupera tu password <span>Ahorrapp</span>
                    </h1>
                </div>
                <div className={styles.loginBody}>
                    <form className={styles.formulario} action="">
                        <div className={styles.formBox}>
                            <label 
                            className={styles.formBox_label}
                            >
                                Email <span className="text-red-300">*</span>
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="email" 
                            placeholder="usuario@correo.com"
                            />
                        </div>
                        <div className={styles.formBox}>
                            <input 
                            type="submit" 
                            value="Recuperar contraseña"
                            className={styles.btnSubmit}
                            />
                        </div>
                        <div className={styles.formBox}>
                            <Link 
                            className={styles.links_submit} 
                            to="/"
                            >
                                ¿Ya tienes tu cuenta?, inicia sesión.
                            </Link>
                            <Link 
                            className={styles.links_submit} 
                            to="/registrar"
                            >
                                Únete a los que ahorran.
                            </Link>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default OlvidePassword