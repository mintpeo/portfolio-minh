import React, {useState} from "react"
import './Info.css'
import {useTranslation} from "react-i18next";
import heroAvatarHead from "../../assets/cv_head.jpg";
import {useNavigate} from "react-router-dom";

export default function Info() {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const navigate = useNavigate();

    const infoData = {
        title: {
            "en": "Hello, I'm Tran Quoc Minh",
            "vi": "Xin chào, Tôi là Trần Quốc Minh"
        },
        subTitle: {
            "en": "Full-stack Intern",
            "vi": "Thực tập sinh Full-stack"
        },
        hero: {
          "en": "Passionate about building web applications and always eager to learn new technologies. Enjoy solving problems, writing clean code, and continuously improving my skills. My goal is to gain hands-on experience and grow into a professional software developer.",
          "vi": "Thích xây dựng các ứng dụng web và luôn sẵn sàng học hỏi những công nghệ mới. Yêu thích giải quyết vấn đề, viết mã nguồn sạch và không ngừng nâng cao kỹ năng. Mục tiêu là tích lũy kinh nghiệm để phát triển trở thành một lập trình viên chuyên nghiệp.",
        },
        chatbox: {
            "en": "Trying to do better.",
            "vi": "Sẽ luôn cố gắng trong công việc.",
        }
    }

    return (
        <div id="info">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {infoData.title[lang]} <br />
                        <span>{infoData.subTitle[lang]}</span>
                    </h1>

                    <p className="hero-subtitle">{infoData.hero[lang]}</p>
                    <div className="hero-avatar-container">
                        {/* Chat Box */}
                        <div className="avatar-chatbox">
                            <span>{infoData.chatbox[lang]}</span>
                            <br/>
                            <br/>
                            <p style={{textAlign: "center"}}>{t("portfolio:img-btn")}!</p>
                            <div className="chatbox-arrow"></div> {/* Mũi tên nhỏ chĩa xuống dưới */}
                        </div>

                        <img
                            src={heroAvatarHead}
                            alt="Tran Quoc Minh Avatar"
                            className="hero-avatar"
                            onClick={() => {window.open("https://www.canva.com/design/DAHPnD7GUs0/2vYGzxK2rlaQojoG6NTQ5g/view", "_blank", "noopener,noreferrer")}}
                        />
                    </div>
                </div>

                {/* Cột mốc Timeline cố định bên phải của Hero */}
                <div className="section-timeline">
                    <div className="timeline-dot active"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-dot"></div>
                </div>
            </div>
        </div>
    )
}