import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import './Navbar.css'

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleLanguage = () => {
        setCurrentLanguage((prevLang) => (prevLang === 'vi' ? 'en' : 'vi'));
    };

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);

    return (
        <div id="navbar">
            {/* Lớp bọc container giúp căn chỉnh giao diện chuẩn xác */}
            <div className="navbar-container">
                <div className="nav-logo">TQM</div>

                {/* Nút Hamburger chỉ hiển thị khi thu nhỏ màn hình */}
                <button className="menu-toggle-btn" onClick={toggleMobileMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                {/* Thêm class 'active' dựa vào state bằng toán tử ba ngôi để mở rèm menu */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>{t("navbar:home")}</a>
                    <a href="#info" onClick={() => setIsMenuOpen(false)}>{t("navbar:about")}</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t("navbar:project")}</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)}>{t("navbar:skill")}</a>

                    {/* Switch language */}
                    <button className="lang-toggle-btn" onClick={toggleLanguage}>
                        {currentLanguage === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
                    </button>
                </div>
            </div>
        </div>
    )
}