
import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <header className="max-w-7xl mx-auto py-4">

            <div className="flex items-center gap-2">
                <Image src={'/logo.webp'} alt='logo' height={50} width={50}></Image>
                <div>
                    <h2>Bangla News 24</h2>
                    <small>{date}</small>
                </div>
                <UserInfo></UserInfo>
            </div>
            <NavLinks></NavLinks>
        </header>

    );
};

export default Header;
