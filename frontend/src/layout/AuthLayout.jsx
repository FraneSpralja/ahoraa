import { Outlet } from "react-router-dom"

// Styles
import styles from "../assets/style/authLayout.module.css"

const AuthLayout = () => {
    return (
        <>
            <h1>Desde AuthLayout</h1>
            
            <main className={styles.mainContainer}>
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout