// import styles from "./Header.module.css"
import { HeaderContainer } from "./styles";
import todoLogo from "../../assets/logo.svg"
function Header() {
    return (
        <HeaderContainer>
            <img src={todoLogo} alt="logo do ignite" />
        </HeaderContainer >

    );
}

export { Header }