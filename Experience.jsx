/* Experience 组件 - 三大经历板块 + 下方详情面板 */
const { useState: useExpState } = React;

const CARD_DATA = [
  {
    id: "project",
    theme: "gold",
    badge: "实践主导落地",
    title: "项目经历",
    subtitle: "从0到1全案 · 跨界统筹 · 成果沉淀",
    description:
      "从0到1独立操盘校园食品营销项目，1个月沉淀私域用户400人，复购率35%，累计售出700+个，净利润超1000元。",
    panelTitle: "项目经历详情",
    panelTitleEn: "Projects",
    panelSubtitle: "共展示 1 项核心经历记录，点击每条卡片可查看深度复盘与关键成果",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
      </svg>
    ),
    projectImages: [
      "assets/project/1.jpg",
      "assets/project/2.jpg",
      "assets/project/3.jpg",
    ],
    projectInsight:
      "这次从 0 到 1 的校园食品营销项目，让我对「做生意」有了最具象的体感。选品阶段反复试吃比对，一点点抠控成本；项目冷启动，一条条私信主动对接潜在用户；订单履约阶段，熬夜整理订单、对接协调配送。整个过程下来我最大的感受是，所谓结果导向从来不是一句空话，而是落实在每一件细碎琐事里的死磕与较真。",
    experiences: [
      {
        tags: ["0-1项目统筹", "私域运营"],
        company: "校园食品营销项目实践",
        companyEn: "",
        position: "独立负责人",
        time: "2026.03 - 2026.04",
        location: "校园",
        overview:
          "从 0 到 1 独立完成校园食品营销全流程，完整跑通「发现需求 → 选品 → 获客 → 成交 → 复购」销售闭环，实现净利润超 1000 元。",
        duties: [
          {
            main: "独立完成供应商筛选、样品试吃与成本测算",
            sub: "（成本 2.5 元/个，售价 4.5 元/个）",
          },
          { main: "通过线上宣传冷启动，搭建私域社群，运营用户关系" },
          { main: "统筹订单统计、配送排期与售后处理全流程履约" },
        ],
        highlights: [
          "1 个月内沉淀精准用户 400 人，复购率约 35%",
          "累计售出 700+ 个，实现净利润超 1000 元",
        ],
      },
    ],
  },
  {
    id: "internship",
    theme: "blue",
    badge: "1段核心实战",
    title: "实习经历",
    subtitle: "企业实战 · 增长运营 · 品牌营销",
    description:
      "负责跨境电商团队招聘执行与制度梳理，日均筛选候选人2-4人，安排面试88场，成功匹配7人入职，独立搭建5份标准化SOP。",
    panelTitle: "实习经历详情",
    panelTitleEn: "Internship",
    panelSubtitle: "共展示 1 项核心经历记录，点击每条卡片可查看深度复盘与关键成果",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    experiences: [
      {
        tags: ["招聘执行", "制度梳理"],
        company: "广州和纵联横投资控股有限公司",
        companyEn: "",
        position: "HP 实习生（跨境电商方向）",
        time: "2026.04 - 2026.07",
        location: "中国·广州",
        overview:
          "负责跨境电商团队全流程招聘执行，独立优化岗位 JD 与 SOP，成功匹配 7 人入职，提前 1 个月跑通招聘基本流程。",
        duties: [
          { main: "负责跨境团队（亚马逊、独立站、海外社媒等）岗位招聘，日均电话准确筛选候选人 2-4 人" },
          { main: "独立优化 10+ 份岗位 JD，搭建 5 份标准化 SOP，规范招聘与新人入职流程" },
          { main: "全程跟进 15 名员工入职对接与带教，完善招聘台账、数据整理、氛围调研等人事基础工作" },
        ],
        highlights: [
          "共安排面试 88 场，初试通过率 56%",
          "成功匹配 7 人入职",
          "搭建 5 份标准化 SOP，优化 10+ 份岗位 JD",
        ],
      },
    ],
  },
  {
    id: "campus",
    theme: "rose",
    badge: "含校园兼职实践",
    title: "校园生活",
    subtitle: "西城印象咖啡厅兼职 · 干部与公益",
    description:
      "涵盖西城印象咖啡厅校园兼职运营（公众号30篇推文/3.2万阅读）、学院辩论队（冠军/四强）及招生就业促进中心学生工作。",
    panelTitle: "校园生活与兼职",
    panelTitleEn: "Campus & Part-time",
    panelSubtitle: "共展示 3 项核心经历记录，点击每条卡片可查看深度复盘与关键成果",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="2" x2="6" y2="4"/>
        <line x1="10" y1="2" x2="10" y2="4"/>
        <line x1="14" y1="2" x2="14" y2="4"/>
      </svg>
    ),
    experiences: [
      {
        tags: ["校园兼职", "门店运营"],
        company: "茂名市西城印象餐饮服务有限公司",
        companyEn: "",
        position: "品牌线上运营",
        time: "2024.10 - 2026.01",
        location: "校园兼职",
        overview:
          "管理门店运营全流程，独立运营公众号内容，带动门店客流提升 15%，顾客满意度提升至 92%。",
        duties: [
          { main: "管理门店采购、库存、收银全流程，处理日常顾客咨询与投诉" },
          { main: "独立运营门店公众号，策划并发布推文内容" },
          { main: "负责 20 名新员工岗前培训与岗位分配，优化服务流程" },
        ],
        highlights: [
          "日均处理顾客咨询/投诉 20+，顾客满意度提升至 92%",
          "发布推文 30 篇，累计阅读量 3.2 万，带动门店客流提升 15%",
        ],
      },
      {
        tags: ["辩论竞技", "逻辑思辨"],
        company: "生食学院辩论队",
        companyEn: "",
        position: "队长",
        time: "在校期间",
        location: "校园",
        overview:
          "参与多场校级/院级辩论赛，主导数据搜集与案例分析，累计输出逻辑稿 1.2 万字+，助力队伍斩获冠军/四强。",
        duties: [
          { main: "参与校级/院级辩论赛 6+ 场，代表队伍完成 4 场核心辩题立论与结辩" },
          { main: "主导数据搜集与案例分析，梳理辩题核心论据" },
        ],
        highlights: [
          "累计输出逻辑稿 1.2 万字 +",
          "梳理辩题核心论据 30+ 条",
          "助力队伍斩获辩论赛冠军 / 四强",
        ],
      },
      {
        tags: ["学生工作", "就业服务"],
        company: "招生宣传与就业促进中心",
        companyEn: "",
        position: "实践部",
        time: "在校期间",
        location: "校园",
        overview:
          "参与校园招聘与就业服务活动，搭建就业信息渠道，累计服务学生 800 余人次，信息更新准确率达 98%。",
        duties: [
          { main: "参与校园招聘、宣讲会等就业活动 10+ 场，协助企业对接与现场秩序维护" },
          { main: "整理、录入并发布就业岗位信息，搭建就业信息渠道" },
          { main: "接待招生咨询，完成数据统计与材料归档" },
        ],
        highlights: [
          "服务学生 800 余人次",
          "发布就业岗位信息 500+ 条，信息更新准确率达 98%",
          "接待招生咨询 300+ 人次",
        ],
      },
    ],
  },
];

function ExpCard({ card, isActive, onToggle }) {
  const themeClass = `card-theme-${card.theme}`;

  const handleClick = () => {
    onToggle(card.id);
  };

  return (
    <div
      className={`exp-card ${themeClass} ${isActive ? "is-active" : ""}`}
      onClick={handleClick}
    >
      <div className="card-top-row">
        <div className="card-icon">{card.iconSvg}</div>
        <span className="card-badge">{card.badge}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <h3 className="card-title">{card.title}</h3>
        <svg className="card-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-color)" }}>
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </div>

      <p className="card-subtitle">{card.subtitle}</p>
      <p className="card-desc">{card.description}</p>

      <div className="card-footer">
        {isActive ? (
          <span className="card-status-active">
            <span className="card-status-dot"></span>
            正在展示详情
          </span>
        ) : (
          <span className="card-immersive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            点击进入沉浸展示
          </span>
        )}
        <button
          className="card-expand-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(card.id);
          }}
        >
          {isActive ? "收起" : "展开详情"}
        </button>
      </div>
    </div>
  );
}

function ExperienceItem({ exp, theme, index }) {
  const themeClass = `card-theme-${theme}`;
  return (
    <div className={`exp-item ${themeClass}`} style={{ animationDelay: `${index * 0.1}s` }}>
      {/* 顶部：标签 + 公司名 / 日期地点 */}
      <div className="exp-item-top">
        <div className="exp-item-company-row">
          <div className="exp-item-tags">
            {exp.tags.map((t, i) => (
              <span key={i} className="exp-item-tag">{t}</span>
            ))}
          </div>
          <span className="exp-item-company-text">{exp.company}</span>
        </div>
        <div className="exp-item-meta">
          <span className="exp-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {exp.time}
          </span>
          <span className="exp-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {exp.location}
          </span>
        </div>
      </div>

      {/* 职位标题 */}
      <h4 className="exp-item-position">{exp.position}</h4>

      {/* 核心职责与成效概述 */}
      <div className="exp-item-overview">
        <span className="exp-overview-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </span>
        <span className="exp-overview-label">核心职责与成效概述：</span>
        <span className="exp-overview-text">{exp.overview}</span>
      </div>

      {/* 左右两栏 */}
      <div className="exp-item-columns">
        <div className="exp-item-col">
          <div className="exp-col-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            主要工作内容 & 职责
          </div>
          <ul className="exp-col-list">
            {exp.duties.map((d, i) => (
              <li key={i}>
                {typeof d === "string" ? (
                  d
                ) : (
                  <>
                    <span>{d.main}</span>
                    {d.sub && <div className="duty-sub">{d.sub}</div>}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="exp-item-col">
          <div className="exp-col-header exp-col-highlight">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            量化成效 & 亮点成果
          </div>
          <ul className="exp-col-list">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useExpState(null);

  const openLightbox = (i) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="project-gallery">
      <div className="exp-col-header" style={{ marginBottom: "16px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--panel-accent)" }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        项目配图
      </div>
      <div className="project-gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="project-gallery-item"
            onClick={() => openLightbox(i)}
          >
            <img src={src} alt={`项目配图 ${i + 1}`} />
            <div className="gallery-zoom-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="关闭"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`项目配图 ${lightboxIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function ProjectInsight({ text }) {
  return (
    <div className="project-insight">
      <div className="insight-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        收获与感悟
      </div>
      <p className="insight-text">{text}</p>
    </div>
  );
}

function DetailPanel({ activeId, onSwitch, onClose }) {
  const card = CARD_DATA.find((c) => c.id === activeId);
  if (!card) return null;

  const themeClass = `panel-theme-${card.theme}`;

  return (
    <div className={`detail-panel ${themeClass} reveal`}>
      {/* 面板头部 */}
      <div className="panel-header">
        <div className="panel-header-left">
          <div className="panel-icon">{card.iconSvg}</div>
          <div>
            <h3 className="panel-title">
              <span className="panel-title-icon">{card.iconSvg}</span>
              {card.panelTitle}
              <span className="panel-title-en">({card.panelTitleEn})</span>
            </h3>
            <p className="panel-subtitle">{card.panelSubtitle}</p>
          </div>
        </div>

        <div className="panel-switcher">
          <span className="panel-switcher-label">切换查看其他：</span>
          <div className="panel-switcher-tabs">
            {CARD_DATA.map((c) => (
              <button
                key={c.id}
                className={`panel-tab panel-tab-${c.theme} ${c.id === activeId ? "active" : ""}`}
                onClick={() => onSwitch(c.id)}
              >
                {c.title.replace("经历", "").replace("生活", "")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 经历列表 */}
      <div className="panel-experiences">
        {card.experiences.map((exp, idx) => (
          <ExperienceItem key={idx} exp={exp} theme={card.theme} index={idx} />
        ))}
      </div>

      {/* 项目专属：配图 + 收获感悟 */}
      {card.id === "project" && card.projectImages && (
        <>
          <ProjectGallery images={card.projectImages} />
          <ProjectInsight text={card.projectInsight} />
        </>
      )}
    </div>
  );
}

function Experience() {
  const [activeId, setActiveId] = useExpState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="exp-section" id="experience">
      <div className="container">
        <div className="exp-header reveal">
          <div className="section-label">Experience Showcase</div>
          <h2 className="section-title">
            实践履历与<span className="section-title-gradient">经历探索</span>
          </h2>
          <p className="exp-subtitle">
            点击下方三大板块卡片，即可以沉浸交互方式进入对应深度履历，支持分类筛选、量化成果剖析与复盘详情。
          </p>
        </div>

        <div className="cards-grid">
          {CARD_DATA.map((card) => (
            <ExpCard
              key={card.id}
              card={card}
              isActive={activeId === card.id}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <DetailPanel
          activeId={activeId}
          onSwitch={setActiveId}
          onClose={() => setActiveId(null)}
        />
      </div>
    </section>
  );
}

Object.assign(window, { Experience });
