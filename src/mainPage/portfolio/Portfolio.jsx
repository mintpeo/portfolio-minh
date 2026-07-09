import React, {useState} from 'react';
import './Portfolio.css';
import Navbar from "../navbar/Navbar.jsx";
import Info from "../info/Info.jsx";
import Skill from "../contact/Skill.jsx";
import {useTranslation} from "react-i18next";

export default function Portfolio() {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            icon: '🛒',
            title: {
                "en": "Stationery",
                "vi": "Văn Phòng Phẩm",
            },
            description: {
                "en": "Developed an online stationery management and business system based on a separate Client-Server model, focusing on smooth user experience and data security.",
                "vi": "Xây dựng hệ thống quản lý và kinh doanh văn phòng phẩm trực tuyến theo mô hình Client-Server tách biệt, tập trung vào trải nghiệm người dùng mượt mà và bảo mật dữ liệu.",
            },
            backContent: [
                {text: "React.jsx, Vite, SCSS, React Router.", name: "Frontend"},
                {text: "Java Spring Boot, Spring Security.", name: "Backend"},
                {text: "PostgreSQL (Supabase).", name: "Database"},
                {text: "Vercel, Render, UptimeRobot.", name: "Cloud & DevOps"}
            ],
            detail: [
                {
                    item: {
                        "en": "Implementing authentication mechanism based on JSON Web Token (JWT), ensuring safety for transactions and user data.",
                        "vi": "Triển khai cơ chế xác thực dựa trên JSON Web Token (JWT), đảm bảo an toàn cho các giao dịch và dữ liệu người dùng.",
                    },
                    name: {
                        "en": "Security System",
                        "vi": "Hệ thống bảo mật",
                    }
                },
                {
                    item: {
                        "en": "Designing relational database on Supabase and authorizing data access.",
                        "vi": "Thiết kế cơ sở dữ liệu quan hệ trên Supabase và phân quyền truy cập dữ liệu.",
                    },
                    name: {
                        "en": "Data Management",
                        "vi": "Quản lý dữ liệu",
                    }
                },
                {
                    item: {
                        "en": "Building standardized RESTful API system with Spring Boot, enabling Frontend to easily interact and handle complex business logic.",
                        "vi": "Xây dựng hệ thống RESTful API chuẩn hóa với Spring Boot, giúp Frontend dễ dàng tương tác và xử lý logic nghiệp vụ phức tạp.",
                    },
                    name: {
                        "en": "",
                        "vi": "",
                    }
                },
                {
                    item: {
                        "en": "Utilizing UptimeRobot to monitor and maintain high availability for the system.",
                        "vi": "Sử dụng UptimeRobot để giám sát và duy trì độ sẵn sàng cao cho hệ thống.",
                    },
                    name: {
                        "en": "",
                        "vi": "",
                    }
                }
            ],
            linkDemo: "https://minh-vpp.vercel.app/"
        },
        {
            id: 2,
            icon: '⌨️',
            title: {
                "en": "Typing",
                "vi": "Gõ phím",
            },
            description: {
                "en": "Developed a web application to measure users' typing speed and accuracy.",
                "vi": "Xây dựng website để kiểm tra tốc độ gõ phím của người dùng.",
            },
            backContent: [
                {text: "React.jsx, Vite, React Router.", name: "Frontend"},
            ],
            detail: [],
            linkDemo: "https://typing-thu.vercel.app/"
        },
        {
            id: 3,
            icon: '🎂',
            title: {
                "en": "Cake",
                "vi": "Bánh kem",
            },
            description: {
                "en": "Developed an e-commerce website for selling cakes and related products.",
                "vi": "Xây dựng website để bán các sản phẩm liên quan đến bánh kem.",
            },
            backContent: [
                {text: "React.jsx, Vite, React Router.", name: "Frontend"},
                {text: "Java Spring Boot, Spring Security.", name: "Backend"},
                {text: "MySQL.", name: "Database"},
            ],
            detail: [],
            linkDemo: "https://github.com/mintpeo/CDWeb-Bakery"
        }
    ];

    const openProjectModal = (project) => {
        setActiveProject(project);
    };

    const closeProjectModal = () => {
        setActiveProject(null);
    };

    return (
        <div className="dark-portfolio">
            {/* Navbar */}
            <Navbar />

            {/* Info */}
            <Info />

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className="section-header">
                    <h2 className="section-title">{t("navbar:project")}</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-container">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card"
                                onClick={() => openProjectModal(project)}>
                                <div className="card-inner">
                                    {/*  Mat truoc  */}
                                    <div className="card-front">
                                        <div className="project-icon">{project.icon}</div>
                                        <h3 className="project-title">{project.title[lang]}</h3>
                                        <p className="project-desc">{project.description[lang]}</p>
                                    </div>

                                    {/*  Mat sau  */}
                                    <div className="custom-back-wrapper">
                                        <span className="badge">{t("portfolio:tech-use")}</span>
                                        <ul className="list-tech">
                                            {project.backContent?.map((item) => (
                                                <li className="item" key={item.name}><b>{item.name}:</b> {item.text}</li>
                                            ))}
                                        </ul>
                                        <h4>{t("portfolio:back-text")} ➔</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cột mốc Timeline chạy dọc bên phải phần Dự án */}
                    <div className="section-timeline">
                        <div className="timeline-dot"></div>
                        <div className="timeline-line"></div>
                        <div className="timeline-dot active"></div>
                        <div className="timeline-line"></div>
                        <div className="timeline-dot"></div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Skill />

            {/*  Modal  */}
            {activeProject && (
                <div className="modal-overlay" onClick={closeProjectModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeProjectModal}>&times;</button>

                        <div className="modal-header">
                            <span className="modal-icon">{activeProject.icon}</span>
                            <h2>{activeProject.title[lang]}</h2>
                        </div>

                        <div className="modal-body">
                            <p className="modal-subtitle">
                                <strong>Link Demo:</strong>
                                <button className="slide-right-btn">
                                    <a href={activeProject.linkDemo}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                        {t("portfolio:modal-btn")} ➔
                                    </a>
                                </button>
                            </p>

                            <hr className="modal-divider"/>
                            <div className="modal-custom-info">
                                {/* Dưới đây là nơi bạn sẽ vào sửa thông tin chi tiết sau này */}
                                <h3>{t("portfolio:tech-use")}</h3>
                                <ul className="list-detail">
                                    {activeProject.backContent?.map((item) => (
                                        <li className="detail-item" key={item.name}><p><b>{item.name}:</b> {item.text}</p></li>
                                    ))}
                                </ul>
                            </div>

                            {activeProject.detail && activeProject.detail.length > 0 ? (
                                <>
                                    <hr className="modal-divider"/>
                                    <div className="modal-custom-info">
                                        {/* Dưới đây là nơi bạn sẽ vào sửa thông tin chi tiết sau này */}
                                        <h3>{t("portfolio:info")}</h3>
                                        <ul className="list-detail">
                                            {activeProject.detail.map((item) => (
                                                <li className="detail-item"><p>{item.name[lang] ? `${item.name[lang]}: ` : ""}{item.item[lang]}</p></li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (<></>)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}