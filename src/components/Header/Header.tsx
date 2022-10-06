import styles from "./Header.module.css"
import todoLogo from "../../assets/logo.svg"
function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="logo do ignite" />
        </header >

    );
}

export { Header }