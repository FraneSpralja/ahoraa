import { Link } from "react-router-dom"
// Style
import styles from "../assets/style/authLayout.module.css"

const Registrar = () => {
    return (
        <>
                <div className={styles.loginHeader}>
                    <h1 
                    className={styles.loginHeader_title}
                        >Unete a <span>Ahorrapp</span>, <br /> 
                        se del club de los que ahorran
                    </h1>
                </div>
                <div className={styles.loginBody}>
                    <form className={styles.formulario} action="">
                        <div className={styles.formBox}>
                            <label 
                            className={styles.formBox_label}
                            >
                                Nombre <span className="text-red-300">*</span>
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="text" 
                            placeholder="Tu nombre"
                            />
                        </div>
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
                            <label 
                            className={styles.formBox_label}
                            >
                                Ingreso
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="text" 
                            placeholder="Ingreso principal"
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
                            <label 
                            className={styles.formBox_label}
                            >
                                Repetir Password <span className="text-red-300">*</span>
                            </label>
                            <input
                            className={styles.formBox_input}
                            type="password" 
                            placeholder="Repite tu password"
                            />
                        </div>
                        <div className={styles.formBox}>
                            <input 
                            type="submit" 
                            value="Registrar"
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
                            to="/olvide-password"
                            >
                                Recupera tu password.
                            </Link>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default Registrar