import React from "react"
import './Info.css'
import {useTranslation} from "react-i18next";

export default function Info() {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;

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
          "en": "Passionate about web application development and always eager to learn new technologies. I enjoy solving problems, writing clean code, and continuously improving my skills. My goal is to contribute to real-world projects while gaining valuable experience and growing into a professional software developer.",
          "vi": "Đam mê phát triển ứng dụng web và luôn sẵn sàng học hỏi những công nghệ mới. Tôi yêu thích giải quyết vấn đề, viết mã nguồn sạch và không ngừng nâng cao kỹ năng của bản thân. Mục tiêu của tôi là đóng góp vào các dự án thực tế đồng thời tích lũy kinh nghiệm để phát triển trở thành một lập trình viên chuyên nghiệp.",
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
                    <a href="#projects" className="hero-btn">Creator journey</a>
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