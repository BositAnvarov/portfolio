module.exports = [
"[project]/src/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "academicHighlights",
    ()=>academicHighlights,
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "impact",
    ()=>impact,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: 'Abdulbosit “Bosit” Anvarov',
    shortName: 'Bosit Anvarov',
    title: 'Software Engineer',
    email: '[Email Address]',
    linkedin: '[LinkedIn URL]',
    github: '[GitHub URL]',
    location: 'Washington'
};
const impact = [
    {
        value: '35M+',
        label: 'Daily rail sensor readings supported'
    },
    {
        value: '1M+',
        label: 'Cloud records queried through AWS Athena'
    },
    {
        value: '1,000+',
        label: 'Services considered in scalable alert architecture'
    },
    {
        value: '100+',
        label: 'Applications supported during observability migration'
    }
];
const experiences = [
    {
        company: 'BNSF Railway',
        role: 'Software Engineer I',
        dates: 'May 2025 – Present',
        location: 'Fort Worth, Texas · Remote/Hybrid as applicable',
        focus: 'Cloud systems, IoT data, backend services, observability',
        impact: 'Production systems that make high-volume operational data useful and actionable.',
        accomplishments: [
            'Integrated Spring Boot services with Kafka-based workflows supporting more than 35 million daily rail sensor readings.',
            'Built a backend microservice using REST APIs, AWS Athena, S3, and Glue to query more than 1 million operational records.',
            'Developed Python-based Observability-as-Code tooling to provision JSON-defined alerts into Grafana and vmalert.',
            'Designed a scalable alert architecture intended to support more than 1,000 services.',
            'Reduced repeat on-call pages by approximately 40% by developing Java guardrails that improved alert actionability.',
            'Supported observability migration work across more than 100 applications.'
        ],
        technologies: [
            'Java',
            'Spring Boot',
            'Kafka',
            'AWS Athena',
            'S3',
            'AWS Glue',
            'OIDC',
            'Python',
            'Grafana',
            'OpenTelemetry',
            'vmalert'
        ]
    },
    {
        company: 'Cencora',
        role: 'Software Developer Intern',
        dates: 'June 2024 – March 2025',
        focus: 'Enterprise applications, automation, EDI systems',
        impact: 'Automation and secure delivery work across enterprise application teams.',
        accomplishments: [
            'Automated database transfer workflows, improving team productivity by approximately 30%.',
            'Contributed to four enterprise applications built with Spring Boot, Angular, and Oracle.',
            'Supported CI/CD workflows with Jenkins.',
            'Addressed static-analysis findings and maintained secure delivery standards through Checkmarx.'
        ],
        technologies: [
            'Java',
            'Spring Boot',
            'Angular',
            'Oracle',
            'Jenkins',
            'Checkmarx'
        ]
    },
    {
        company: 'Sensoria Health',
        role: 'Software Engineer Intern',
        dates: 'January 2024 – June 2024',
        location: 'Redmond, Washington',
        focus: 'Healthcare software, accessibility, backend services',
        impact: 'Accessible healthcare workflows grounded in accurate patient-facing data.',
        accomplishments: [
            'Collaborated across more than 50 requirements and design discussions for healthcare software and .NET microservices.',
            'Identified and resolved more than 15 metric inaccuracies in patient-facing dashboards.',
            'Developed a JavaScript language-switching feature supporting English, Italian, and Japanese.',
            'Improved accessibility and usability for multilingual users monitoring patient progress.'
        ],
        technologies: [
            '.NET',
            'C#',
            'JavaScript',
            'Azure Functions',
            'Microservices'
        ]
    }
];
const projects = [
    {
        id: 'observability',
        title: 'Observability-as-Code Platform',
        category: 'Cloud & Infrastructure',
        summary: 'A configuration-driven alert provisioning system for creating and managing monitoring rules at scale.',
        challenge: 'Manual alert configuration drifts as application environments grow.',
        approach: 'Structured JSON definitions become repeatable, version-controlled monitoring rules provisioned into Grafana and vmalert.',
        details: [
            'Uses Python and structured JSON definitions.',
            'Provisions alert rules into Grafana and vmalert.',
            'Designed for repeatability across large application environments.',
            'Emphasizes consistency, version control, and reduced manual configuration.'
        ],
        technologies: [
            'Python',
            'Grafana',
            'vmalert',
            'OpenTelemetry',
            'JSON',
            'CI/CD'
        ],
        metric: 'Designed for 1,000+ services',
        featured: true,
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    },
    {
        id: 'athena',
        title: 'Cloud Operational Data Query Service',
        category: 'Cloud & Infrastructure',
        summary: 'A Spring Boot backend service that securely queries cloud-hosted operational data through AWS Athena.',
        challenge: 'Operational teams need a dependable path from service requests to large datasets in object storage.',
        approach: 'A REST API orchestrates Athena queries over S3 data with Glue metadata and OIDC-based environment authentication.',
        details: [
            'REST API architecture with DTO mapping and validation.',
            'AWS Athena query execution over data stored in S3.',
            'Metadata managed through AWS Glue.',
            'OIDC-based authentication between environments with test coverage.'
        ],
        technologies: [
            'Java',
            'Spring Boot',
            'AWS Athena',
            'S3',
            'Glue',
            'OIDC',
            'JUnit'
        ],
        metric: '1M+ records queried',
        featured: true,
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    },
    {
        id: 'weather',
        title: 'Distributed Weather Alert System',
        category: 'Distributed Systems',
        summary: 'A distributed weather notification system comparing Java RMI callbacks with gRPC streaming.',
        challenge: 'Alert delivery needs clear tradeoffs between latency, bandwidth, and implementation complexity.',
        approach: 'Implemented callback-based and streaming architectures, then documented their operational characteristics.',
        details: [
            'Evaluated communication models for distributed alert delivery.',
            'Compared latency and bandwidth characteristics.',
            'Implemented callback-based and streaming architectures.',
            'Documented architectural tradeoffs.'
        ],
        technologies: [
            'Java',
            'RMI',
            'gRPC',
            'Distributed Systems'
        ],
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    },
    {
        id: 'rop',
        title: 'Retinopathy of Prematurity Classification',
        category: 'Machine Learning',
        summary: 'A patient-aware retinal-image classification workflow designed to prevent patient-level data leakage.',
        challenge: 'Clinical screening models need honest evaluation and sensitivity to missed cases.',
        approach: 'Patient-wise splitting, binary classification, and clinical metrics provide a more reliable evaluation workflow.',
        details: [
            'Dataset of retinal images and structured clinical metadata.',
            'Patient-wise train/test splitting and binary ROP classification.',
            'Evaluated accuracy, F1, AUC-ROC, sensitivity, and specificity.',
            'Explored explainability using LIME and prioritized sensitivity.'
        ],
        technologies: [
            'Python',
            'pandas',
            'scikit-learn',
            'Computer Vision',
            'LIME'
        ],
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    },
    {
        id: 'wave',
        title: 'Parallel Wave Simulation',
        category: 'Distributed Systems',
        summary: 'A C++ parallel-computing project focused on accelerating numerical wave simulation workloads.',
        challenge: 'Numerical workloads expose real tradeoffs between throughput, synchronization, and correctness.',
        approach: 'Parallelized the simulation and evaluated performance characteristics across synchronization strategies.',
        details: [
            'Parallelized numerical computation.',
            'Evaluated performance and synchronization tradeoffs.',
            'Used concepts from high-performance and parallel computing.'
        ],
        technologies: [
            'C++',
            'Parallel Programming',
            '[OpenMP or Exact Technology]'
        ],
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    },
    {
        id: 'mobile-mvp',
        title: 'Mobile Application MVP',
        category: 'Full Stack',
        summary: 'A mobile product MVP built with React Native and a Spring Boot backend deployed on AWS.',
        challenge: '[Add the exact user problem and product name.]',
        approach: 'A cross-platform client connects to a REST backend and cloud-hosted application infrastructure.',
        details: [
            'Cross-platform mobile client with a REST-based backend.',
            'Cloud-hosted infrastructure using EC2, RDS, S3, and CloudFront.',
            'Product name and exact user problem remain intentionally open for customization.'
        ],
        technologies: [
            'React Native',
            'Spring Boot',
            'AWS EC2',
            'RDS',
            'S3',
            'CloudFront'
        ],
        github: '[Add GitHub URL]',
        demo: '[Add live demo URL]'
    }
];
const skillGroups = [
    {
        title: 'Backend & APIs',
        icon: '01',
        skills: [
            'Java',
            'Spring Boot',
            'C#',
            '.NET',
            'REST APIs',
            'Microservices',
            'JUnit'
        ]
    },
    {
        title: 'Cloud & Infrastructure',
        icon: '02',
        skills: [
            'AWS',
            'Athena',
            'S3',
            'Glue',
            'EC2',
            'RDS',
            'CloudFront',
            'Azure Functions',
            'OIDC',
            'Docker',
            'Jenkins'
        ]
    },
    {
        title: 'Distributed Systems & Messaging',
        icon: '03',
        skills: [
            'Kafka',
            'Java RMI',
            'gRPC',
            'OpenTelemetry',
            'Parallel programming',
            'Distributed-system architecture'
        ]
    },
    {
        title: 'Observability & Reliability',
        icon: '04',
        skills: [
            'Grafana',
            'vmalert',
            'Observability-as-Code',
            'Alert design',
            'Monitoring architecture',
            'Production support'
        ]
    },
    {
        title: 'Frontend & Mobile',
        icon: '05',
        skills: [
            'JavaScript',
            'TypeScript',
            'React',
            'React Native',
            'Angular',
            'Tailwind CSS'
        ]
    },
    {
        title: 'Data & Machine Learning',
        icon: '06',
        skills: [
            'Python',
            'pandas',
            'scikit-learn',
            'Computer Vision',
            'LIME',
            'SQL'
        ]
    }
];
const education = [
    {
        degree: 'Master of Science in Computer Science or Computer Science and Software Engineering',
        date: '[Confirm expected graduation month and year]',
        gpa: '3.8',
        courses: [
            'Distributed Systems',
            'Parallel Programming',
            'Machine Learning',
            'Software Research Methods',
            'Computer Vision',
            'Advanced software and systems topics'
        ]
    },
    {
        degree: 'Bachelor of Science in Computer Science and Software Engineering',
        date: 'August 2023',
        gpa: 'Approximately 3.55–3.60 — replace with exact value',
        courses: [
            'Data Structures',
            'Algorithms',
            'Computer Architecture',
            'Operating Systems',
            'Database Systems',
            'Distributed Systems',
            'Parallel Programming'
        ]
    }
];
const academicHighlights = [
    'CS Peer Facilitator / Grader',
    'iBioML research experience',
    'Distributed weather-alert research project',
    'Parallel and distributed-computing coursework',
    'Retinopathy of Prematurity machine-learning research'
];
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const nav = [
    [
        'Home',
        'top'
    ],
    [
        'Journey',
        'journey'
    ],
    [
        'Experience',
        'experience'
    ],
    [
        'Projects',
        'projects'
    ],
    [
        'Education',
        'education'
    ],
    [
        'Skills',
        'skills'
    ],
    [
        'Contact',
        'contact'
    ]
];
function Header() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('top');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 20);
            const current = nav.map(([, id])=>id).reverse().find((id)=>{
                const el = document.getElementById(id);
                return el && el.getBoundingClientRect().top < 180;
            });
            if (current) setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header ${scrolled ? 'is-scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "brand",
                href: "#top",
                "aria-label": "Back to top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-mark",
                        children: "BA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 12,
                        columnNumber: 135
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].shortName
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 12,
                        columnNumber: 173
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 12,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-button",
                onClick: ()=>setOpen(!open),
                "aria-expanded": open,
                "aria-controls": "primary-nav",
                "aria-label": open ? 'Close menu' : 'Open menu',
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 12,
                    columnNumber: 376
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 12,
                    columnNumber: 384
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 12,
                columnNumber: 209
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "primary-nav",
                className: `site-nav ${open ? 'is-open' : ''}`,
                "aria-label": "Primary navigation",
                children: [
                    nav.map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: active === id ? 'active' : '',
                            href: `#${id}`,
                            onClick: ()=>setOpen(false),
                            children: label
                        }, id, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 12,
                            columnNumber: 530
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "resume-link",
                        href: "/resume/Abdulbosit-Anvarov-Resume.pdf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 12,
                                columnNumber: 716
                            }, this),
                            " Resume"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 12,
                        columnNumber: 644
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 12,
                columnNumber: 402
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/hero/AnimatedGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedGrid",
    ()=>AnimatedGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
;
function AnimatedGrid() {
    const nodes = Array.from({
        length: 12
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-visual",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-plane"
            }, void 0, false, {
                fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                lineNumber: 7,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "visual-label label-a",
                children: "telemetry.stream"
            }, void 0, false, {
                fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                lineNumber: 7,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "visual-label label-b",
                children: "/ systems / healthy"
            }, void 0, false, {
                fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                lineNumber: 7,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "data-lines",
                viewBox: "0 0 600 500",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M60 350 190 250 310 320 445 140 540 180"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                        lineNumber: 7,
                        columnNumber: 273
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M190 250 190 100M310 320V470M445 140V60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                        lineNumber: 7,
                        columnNumber: 325
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                lineNumber: 7,
                columnNumber: 211
            }, this),
            nodes.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: "data-node",
                    style: {
                        left: `${12 + index % 4 * 25}%`,
                        top: `${18 + Math.floor(index / 4) * 25}%`
                    },
                    animate: {
                        opacity: [
                            0.25,
                            0.9,
                            0.25
                        ]
                    },
                    transition: {
                        duration: 3.4,
                        delay: index * 0.16,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }, index, false, {
                    fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
                    lineNumber: 7,
                    columnNumber: 408
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hero/AnimatedGrid.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection,
    "smoothSpring",
    ()=>smoothSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
'use client';
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: 'easeOut'
        }
    }
};
function AnimatedSection({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.2
        },
        variants: fadeUp,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/AnimatedSection.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
const smoothSpring = {
    type: 'spring',
    stiffness: 260,
    damping: 28,
    mass: 0.8
};
}),
"[project]/src/components/hero/MagneticButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function MagneticButton({ href, children, secondary = false, download = false }) {
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothSpring"]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothSpring"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
        const update = ()=>setEnabled(media.matches);
        update();
        media.addEventListener('change', update);
        return ()=>media.removeEventListener('change', update);
    }, []);
    const handleMove = (event)=>{
        if (!enabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].a, {
        href: href,
        download: download || undefined,
        className: `button ${secondary ? 'button-secondary' : 'button-primary'}`,
        onPointerMove: handleMove,
        onPointerLeave: ()=>{
            x.set(0);
            y.set(0);
        },
        whileTap: {
            scale: 0.98
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
            style: {
                x,
                y
            },
            className: "inline-flex items-center gap-2",
            children: [
                download && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/MagneticButton.tsx",
                    lineNumber: 13,
                    columnNumber: 326
                }, this),
                children,
                !download && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/MagneticButton.tsx",
                    lineNumber: 13,
                    columnNumber: 373
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/MagneticButton.tsx",
            lineNumber: 13,
            columnNumber: 240
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero/MagneticButton.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/impact/ImpactStrip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpactStrip",
    ()=>ImpactStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ImpactStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "impact",
        className: "impact-strip",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedSection"], {
            className: "impact-inner",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["impact"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "impact-item",
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.4
                    },
                    transition: {
                        delay: index * 0.08,
                        duration: 0.4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: item.value
                        }, void 0, false, {
                            fileName: "[project]/src/components/impact/ImpactStrip.tsx",
                            lineNumber: 7,
                            columnNumber: 368
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/impact/ImpactStrip.tsx",
                            lineNumber: 7,
                            columnNumber: 397
                        }, this)
                    ]
                }, item.value, true, {
                    fileName: "[project]/src/components/impact/ImpactStrip.tsx",
                    lineNumber: 7,
                    columnNumber: 157
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/impact/ImpactStrip.tsx",
            lineNumber: 7,
            columnNumber: 86
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/impact/ImpactStrip.tsx",
        lineNumber: 7,
        columnNumber: 40
    }, this);
}
}),
"[project]/src/components/projects/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const filters = [
    'All',
    'Cloud & Infrastructure',
    'Distributed Systems',
    'Machine Learning',
    'Full Stack'
];
function ProjectModal({ project, close }) {
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        closeRef.current?.focus();
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const escape = (e)=>e.key === 'Escape' && close();
        document.addEventListener('keydown', escape);
        return ()=>{
            document.body.style.overflow = previous;
            document.removeEventListener('keydown', escape);
        };
    }, [
        close
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "modal-backdrop",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onMouseDown: (e)=>e.target === e.currentTarget && close(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "project-modal-title",
            className: "project-modal",
            initial: {
                opacity: 0,
                y: 24,
                scale: 0.98
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 18,
                scale: 0.98
            },
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothSpring"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "icon-button modal-close",
                    ref: closeRef,
                    onClick: close,
                    "aria-label": "Close project details",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                        lineNumber: 15,
                        columnNumber: 554
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 444
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "section-kicker",
                    children: project.category
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 568
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "project-modal-title",
                    children: project.title
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 620
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "modal-summary",
                    children: project.summary
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 669
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-columns",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-label",
                                    children: "The problem"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 755
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: project.challenge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 797
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 750
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-label",
                                    children: "The approach"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 834
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: project.approach
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 877
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 829
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 719
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-detail",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "modal-label",
                            children: "Key contributions & decisions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 944
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: project.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: detail
                                }, detail, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1041
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 1004
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 914
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tag-row",
                    children: project.technologies.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tag",
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 1144
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 1084
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-links",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: project.github,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1250
                                }, this),
                                " GitHub ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1277
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 1225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: project.demo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1330
                                }, this),
                                " Live demo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 15,
                                    columnNumber: 1367
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 15,
                            columnNumber: 1307
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 15,
                    columnNumber: 1196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
            lineNumber: 15,
            columnNumber: 182
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
function ProjectsSection() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const shown = filter === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].filter((project)=>project.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "section-wrap section-tint",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "section-kicker",
                        children: "03 / Selected projects"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                        lineNumber: 18,
                        columnNumber: 377
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-intro project-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Systems work with a clear point of view."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 483
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Selected work across infrastructure, distributed computing, machine learning, and full-stack product delivery."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 532
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                lineNumber: 18,
                                columnNumber: 478
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "project-count",
                                children: [
                                    String(shown.length).padStart(2, '0'),
                                    " projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                lineNumber: 18,
                                columnNumber: 655
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                        lineNumber: 18,
                        columnNumber: 433
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                lineNumber: 18,
                columnNumber: 360
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-row",
                role: "tablist",
                "aria-label": "Filter projects",
                children: filters.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        "aria-selected": filter === item,
                        className: filter === item ? 'filter active' : 'filter',
                        onClick: ()=>setFilter(item),
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                        lineNumber: 18,
                        columnNumber: 861
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                lineNumber: 18,
                columnNumber: 766
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "project-grid",
                    layout: true,
                    children: shown.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
                            layoutId: project.id,
                            layout: true,
                            className: "project-card",
                            tabIndex: 0,
                            onClick: ()=>setSelected(project),
                            onKeyDown: (e)=>(e.key === 'Enter' || e.key === ' ') && setSelected(project),
                            whileHover: {
                                y: -6
                            },
                            whileFocus: {
                                y: -4
                            },
                            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smoothSpring"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-visual",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "visual-index",
                                            children: project.id === 'observability' ? 'OBS / 01' : project.id.toUpperCase().slice(0, 8)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1437
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "visual-scan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1559
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "card-arrow",
                                            size: 19
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1590
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 18,
                                    columnNumber: 1405
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-card-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1680
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1725
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: project.summary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1749
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "project-footer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tag-row",
                                                    children: project.technologies.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tag",
                                                            children: tag
                                                        }, tag, false, {
                                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                                            lineNumber: 18,
                                                            columnNumber: 1877
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 1805
                                                }, this),
                                                project.metric && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "project-metric",
                                                    children: project.metric
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 1948
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 1773
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                                    lineNumber: 18,
                                    columnNumber: 1645
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                            lineNumber: 18,
                            columnNumber: 1116
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 18,
                    columnNumber: 1048
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                lineNumber: 18,
                columnNumber: 1035
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectModal, {
                    project: selected,
                    close: ()=>setSelected(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                    lineNumber: 18,
                    columnNumber: 2093
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectsSection.tsx",
                lineNumber: 18,
                columnNumber: 2063
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectsSection.tsx",
        lineNumber: 18,
        columnNumber: 299
    }, this);
}
}),
"[project]/src/components/roadmap/RoadmapSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoadmapSection",
    ()=>RoadmapSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-ssr] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$timeline$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/animejs/dist/modules/timeline/timeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const milestones = [
    {
        number: '01',
        phase: 'High School',
        year: 'The beginning',
        label: 'A curious mind',
        title: 'Every story starts somewhere.',
        description: 'A kid who asked too many questions discovered that ideas could become things—and that learning could be its own kind of adventure.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        meta: 'Curiosity became the starting point',
        stage: 'kid',
        side: 'left'
    },
    {
        number: '02',
        phase: 'High School',
        year: 'High school years',
        label: 'The first signal',
        title: 'Technology became a language.',
        description: 'Classes, experiments, and early projects revealed that a computer could turn an idea into something useful for other people.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        meta: 'The first real pull toward software',
        stage: 'student',
        side: 'right'
    },
    {
        number: '03',
        phase: 'College',
        year: 'University',
        label: 'Learning the craft',
        title: 'Curiosity met discipline.',
        description: 'Hard problems, long nights, new people, and the freedom to fail forward built the foundations of an engineer.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"],
        meta: 'Computer science · systems · teamwork',
        stage: 'college',
        side: 'left'
    },
    {
        number: '04',
        phase: 'College',
        year: '2023',
        label: 'A defining checkpoint',
        title: 'Graduation opened the next door.',
        description: 'Years of study became a Computer Science degree—and an important reminder that progress is made one difficult chapter at a time.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        meta: 'B.S. Computer Science · 2023',
        stage: 'graduation',
        side: 'right'
    },
    {
        number: '05',
        phase: 'Career',
        year: 'The first roles',
        label: 'The work became real',
        title: 'Knowledge turned into responsibility.',
        description: 'Internships and production systems introduced real users, real teammates, real failures, and software that had to hold up.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        meta: 'Healthcare · enterprise · production',
        stage: 'engineer',
        side: 'left'
    },
    {
        number: '06',
        phase: 'Career',
        year: 'Today',
        label: 'Still becoming',
        title: 'Building systems that matter.',
        description: 'Now the work spans cloud platforms, distributed systems, and observability—while the curiosity that started everything keeps growing.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        meta: 'Software Engineer · the story continues',
        stage: 'future',
        side: 'right'
    }
];
const phases = [
    'High School',
    'College',
    'Career'
];
const phaseMotion = [
    {
        entry: '68%',
        first: '68%',
        second: '24%'
    },
    {
        entry: '24%',
        first: '65%',
        second: '22%'
    },
    {
        entry: '22%',
        first: '62%',
        second: '38%'
    }
];
function RoadmapSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const avatarMoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const avatarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activePhase, setActivePhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const active = milestones[activeStep];
    const ActiveIcon = active.icon;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const stage = stageRef.current;
        const avatarMover = avatarMoverRef.current;
        const avatar = avatarRef.current;
        const intro = introRef.current;
        if (!section || !stage || !avatarMover || !avatar || !intro) return;
        const highlights = Array.from(section.querySelectorAll('.journey-highlight'));
        const triggers = Array.from(section.querySelectorAll('.journey-trigger'));
        const ambientLines = Array.from(stage.querySelectorAll('.journey-ambient-line'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const buildPhaseTimeline = (phaseIndex)=>{
            const firstHighlight = highlights[phaseIndex * 2];
            const secondHighlight = highlights[phaseIndex * 2 + 1];
            const motion = phaseMotion[phaseIndex];
            const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$animejs$2f$dist$2f$modules$2f$timeline$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTimeline"])({
                autoplay: false
            });
            timeline.add(avatarMover, {
                left: [
                    motion.entry,
                    motion.first
                ],
                duration: 220,
                ease: 'outCubic'
            }, 0).add(avatarMover, {
                left: motion.second,
                duration: 780,
                ease: 'inOutCubic'
            }, 220).add(ambientLines, {
                rotate: [
                    0,
                    phaseIndex % 2 ? -8 : 8
                ],
                opacity: [
                    0.22,
                    0.52
                ],
                duration: 1000,
                ease: 'inOutSine'
            }, 0).add(firstHighlight, {
                opacity: [
                    0,
                    1
                ],
                translateY: [
                    34,
                    0
                ],
                duration: 260,
                ease: 'outCubic'
            }, 80).add(firstHighlight, {
                opacity: [
                    1,
                    0
                ],
                translateY: [
                    0,
                    -22
                ],
                duration: 180,
                ease: 'inCubic'
            }, 400).add(secondHighlight, {
                opacity: [
                    0,
                    1
                ],
                translateY: [
                    34,
                    0
                ],
                duration: 300,
                ease: 'outCubic'
            }, 520);
            if (phaseIndex === 0) {
                timeline.add(intro, {
                    opacity: [
                        1,
                        0
                    ],
                    translateY: [
                        0,
                        -28
                    ],
                    duration: 220,
                    ease: 'inCubic'
                }, 0);
            }
            timeline.pause();
            return timeline;
        };
        const highSchoolTimeline = buildPhaseTimeline(0);
        const collegeTimeline = buildPhaseTimeline(1);
        const careerTimeline = buildPhaseTimeline(2);
        const timelines = [
            highSchoolTimeline,
            collegeTimeline,
            careerTimeline
        ];
        const triggerObserver = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>entry.target.classList.toggle('is-in-view', entry.isIntersecting));
        }, {
            rootMargin: '-46% 0px -46% 0px',
            threshold: 0
        });
        triggers.forEach((trigger)=>triggerObserver.observe(trigger));
        let frame = 0;
        let previousStep = -1;
        let previousPhase = -1;
        const updateScene = ()=>{
            frame = 0;
            const bounds = section.getBoundingClientRect();
            const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
            const progress = Math.min(1, Math.max(0, -bounds.top / scrollableDistance));
            const phaseFloat = Math.min(2.9999, progress * 3);
            const phaseIndex = Math.floor(phaseFloat);
            const phaseProgress = phaseFloat - phaseIndex;
            const nextStep = Math.min(5, phaseIndex * 2 + (phaseProgress < 0.5 ? 0 : 1));
            stage.style.setProperty('--journey-progress', `${progress * 100}%`);
            stage.style.setProperty('--phase-progress', String(phaseProgress));
            if (!reduceMotion) {
                timelines[phaseIndex].seek(phaseProgress * timelines[phaseIndex].duration, true);
            } else {
                intro.style.opacity = progress < 0.05 ? '1' : '0';
                highlights.forEach((highlight, index)=>{
                    highlight.style.opacity = index === nextStep ? '1' : '0';
                });
                avatarMover.style.left = phaseProgress < 0.5 ? phaseMotion[phaseIndex].first : phaseMotion[phaseIndex].second;
            }
            if (phaseIndex !== previousPhase) {
                previousPhase = phaseIndex;
                highlights.forEach((highlight, index)=>{
                    if (Math.floor(index / 2) !== phaseIndex) highlight.style.opacity = '0';
                });
                if (phaseIndex > 0) intro.style.opacity = '0';
                setActivePhase(phaseIndex);
            }
            if (nextStep !== previousStep) {
                previousStep = nextStep;
                avatar.dataset.stage = milestones[nextStep].stage;
                setActiveStep(nextStep);
            }
        };
        const requestSceneUpdate = ()=>{
            if (!frame) frame = window.requestAnimationFrame(updateScene);
        };
        updateScene();
        window.addEventListener('scroll', requestSceneUpdate, {
            passive: true
        });
        window.addEventListener('resize', requestSceneUpdate);
        return ()=>{
            triggerObserver.disconnect();
            window.removeEventListener('scroll', requestSceneUpdate);
            window.removeEventListener('resize', requestSceneUpdate);
            if (frame) window.cancelAnimationFrame(frame);
            timelines.forEach((timeline)=>timeline.revert());
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "top",
        className: `journey-hero journey-phase-${activePhase}`,
        "aria-labelledby": "journey-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: "journey",
                className: "journey-anchor"
            }, void 0, false, {
                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stageRef,
                className: "journey-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-grid",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-glow",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "journey-ambient-line ambient-line-a",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "journey-ambient-line ambient-line-b",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-topline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].shortName
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    phases[activePhase],
                                    " · ",
                                    active.number,
                                    " / 06"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: introRef,
                        className: "journey-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "journey-kicker",
                                children: "Software engineer · A life in motion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "journey-title",
                                children: [
                                    "Every system",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 46
                                    }, this),
                                    "has a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "story."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 58
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Scroll through the moments that shaped the person behind the code—from a curious kid to an engineer building reliable systems at scale."
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: avatarMoverRef,
                        className: "journey-avatar-mover",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "journey-avatar-halo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: avatarRef,
                                className: "journey-avatar",
                                "data-stage": active.stage
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "journey-avatar-shadow"
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-highlights",
                        "aria-live": "polite",
                        children: milestones.map((milestone, index)=>{
                            const Icon = milestone.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: `journey-highlight journey-highlight-${milestone.side} ${activeStep === index ? 'is-current' : ''}`,
                                "data-step": index,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "journey-highlight-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "journey-highlight-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 17,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 60
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    milestone.number,
                                                    " / ",
                                                    milestone.year
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "journey-highlight-label",
                                        children: [
                                            milestone.phase,
                                            " · ",
                                            milestone.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: milestone.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "journey-highlight-copy",
                                        children: milestone.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "journey-highlight-meta",
                                        children: milestone.meta
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, milestone.number, true, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-status",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "journey-status-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveIcon, {
                                    size: 15,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                    lineNumber: 184,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: active.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-progress",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "journey-progress-track",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                    lineNumber: 189,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "journey-progress-dots",
                                children: milestones.map((milestone, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: index <= activeStep ? 'is-passed' : '',
                                        children: milestone.number
                                    }, milestone.number, false, {
                                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                        lineNumber: 191,
                                        columnNumber: 51
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-scroll-cue",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Scroll to move the story"
                            }, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 195,
                                columnNumber: 64
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                                lineNumber: 195,
                                columnNumber: 101
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journey-scroll-track",
                "aria-hidden": "true",
                children: milestones.map((milestone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "journey-trigger",
                        "data-step": milestone.number
                    }, milestone.number, false, {
                        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                        lineNumber: 199,
                        columnNumber: 40
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/roadmap/RoadmapSection.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_1bu6zeq._.js.map