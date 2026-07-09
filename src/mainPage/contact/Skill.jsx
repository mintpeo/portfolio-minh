import React, {useState} from "react"
import './Skill.css'
import {useTranslation} from "react-i18next";

export default function Skill() {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const skillsData = [
        {
            id: 1,
            category: { en: "Programming Languages", vi: "Ngôn ngữ Lập trình" },
            icon: "💻",
            items: [
                { name: "Java", desc: { en: "Core, OOP, Collection, Multithreading.", vi: "Java Core, hướng đối tượng, xử lý đa luồng." } },
                { name: "JavaScript / TypeScript", desc: { en: "ES6+, Async/Await, DOM, Type safety.", vi: "ES6+, bất đồng bộ, lập trình an toàn với TS." } },
                { name: "React Native", desc: { en: "Cross-platform mobile application core.", vi: "Nền tảng phát triển ứng dụng di động đa nền tảng." } }
            ]
        },
        {
            id: 2,
            category: { en: "Computer Science Fundamentals", vi: "Nền tảng Khoa học Máy tính" },
            icon: "🧠",
            items: [
                { name: "Data Structures & Algorithms", desc: { en: "Optimization & problem-solving mindset.", vi: "Tư duy tối ưu hóa cấu trúc dữ liệu và thuật toán." } },
                { name: "OOP (Object-Oriented Programming)", desc: { en: "Solid design principles (Solid, Clean Code).", vi: "Áp dụng các nguyên lý thiết kế hệ thống chuẩn hóa." } },
                { name: "JWT (JSON Web Token)", desc: { en: "Secure stateless authentication workflows.", vi: "Cơ chế mã hóa xác thực người dùng bảo mật." } }
            ]
        },
        {
            id: 3,
            category: { en: "Cloud & Hosting", vi: "Điện toán đám mây & Lưu trữ" },
            icon: "☁️",
            items: [
                { name: "Vercel", desc: { en: "Optimized deployment for Frontend applications.", vi: "Tối ưu hóa triển khai và phân phối ứng dụng Frontend." } },
                { name: "Render", desc: { en: "Hosting for Backend APIs and microservices.", vi: "Môi trường live ứng dụng và quản trị RESTful API." } },
                { name: "Supabase (PostgreSQL)", desc: { en: "Relational database management & cloud hosting.", vi: "Quản trị cơ sở dữ liệu quan hệ mạnh mẽ trên Cloud." } }
            ]
        },
        {
            id: 4,
            category: { en: "Monitoring & Automation", vi: "Giám sát & Tự động hóa" },
            icon: "🤖",
            items: [
                { name: "UptimeRobot", desc: { en: "Real-time system availability & monitoring.", vi: "Giám sát trạng thái hoạt động của hệ thống 24/7." } }
            ]
        }
    ];

    return (
        <div id="skills" className="skills-section">
            <div className="section-header">
                <h2 className="section-title">{lang === 'vi' ? 'Kỹ năng & Nền tảng' : 'Skills & Expertise'}</h2>
                <div className="title-underline"></div>
            </div>

            <div style={{display: "flex"}}>
                {/* Lưới hiển thị các nhóm kỹ năng nằm ngang */}
                <div className="skills-grid">
                    {skillsData.map((skillGroup) => (
                        <div key={skillGroup.id} className="skill-group-card">
                            <div className="skill-group-header">
                                <span className="skill-group-icon">{skillGroup.icon}</span>
                                <h3>{skillGroup.category[lang]}</h3>
                            </div>

                            <ul className="skill-items-list">
                                {skillGroup.items.map((skill, idx) => (
                                    <li key={idx} className="skill-item">
                                        <strong>{skill.name}</strong>
                                        {/*<p>{skill.desc[lang]}</p>*/}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section-timeline">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                    <div className="timeline-dot active"></div>
                </div>
            </div>
        </div>
    );
}