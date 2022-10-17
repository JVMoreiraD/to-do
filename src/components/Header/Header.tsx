import { Logo } from "../Logo";
function Header() {
    return (
        <header className="bg-gray-700 flex justify-center items-center h-48">
            <Logo className="h-12 relative" />
        </header >

    );
}

export { Header }