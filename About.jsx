/* About 组件 - 个人信息与照片 */
const { useState: useAboutState } = React;

function CopyButton({ text, label }) {
  const [copied, setCopied] = useAboutState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button className="copy-btn" onClick={handleCopy}>
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          已复制
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          复制
        </>
      )}
    </button>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-section-header reveal">
          <h2 className="section-title">
            <span className="section-title-gradient">About Me</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* 左侧信息 */}
          <div className="about-info">
            <div className="info-block reveal reveal-delay-1">
              <div className="info-name">杨百媚</div>
            </div>

            {/* 联系方式在上 */}
            <div className="info-block reveal reveal-delay-2">
              <div className="info-block-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                联系方式
              </div>
              <div className="info-block-content">
                <div className="info-contact-item">
                  <span className="info-contact-label">手机</span>
                  <span className="info-contact-value">19304019775</span>
                  <CopyButton text="19304019775" />
                </div>
                <div className="info-contact-item">
                  <span className="info-contact-label">邮箱</span>
                  <span className="info-contact-value">3448896807@qq.com</span>
                  <CopyButton text="3448896807@qq.com" />
                </div>
              </div>
            </div>

            {/* 教育背景在下（弱化样式） */}
            <div className="info-block info-block-subtle reveal reveal-delay-3">
              <div className="info-block-label-subtle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                教育背景
              </div>
              <div className="info-block-content-subtle">
                <p className="edu-school">广东石油化工学院 · 食品科学与工程（本科）</p>
                <p className="edu-time">2023.09 — 2027.06</p>
                <div className="edu-stats">
                  <span>GPA 3.68/4.0</span>
                  <span>专业 Top 10%</span>
                  <span>校二等奖学金</span>
                  <span>辩论赛特等奖</span>
                  <span>最佳辩手</span>
                </div>
              </div>
            </div>

            {/* 个人技能 - 紧凑布局 */}
            <div className="info-block info-block-compact reveal reveal-delay-4">
              <div className="info-block-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                个人技能
              </div>
              <div className="info-block-content">
                <div className="skill-chips-inline">
                  <span className="skill-chip">Word</span>
                  <span className="skill-chip">Excel</span>
                  <span className="skill-chip">PPT</span>
                  <span className="skill-chip">CET-6</span>
                  <span className="skill-chip">商务英语</span>
                  <span className="skill-chip">活动策划</span>
                  <span className="skill-chip">社群运营</span>
                </div>
              </div>
            </div>

            <div className="info-block reveal reveal-delay-5">
              <div className="info-block-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                自我评价
              </div>
              <ul className="info-list">
                <li><strong>行动力强</strong> — HR 实习提前 1 个月跑通招聘基本流程</li>
                <li><strong>沟通能力强</strong> — 辩论队出身，善于协调推动事情落地</li>
                <li><strong>结果导向</strong> — 全程独立从 0 到 1 落地校园食品营销项目</li>
              </ul>
            </div>
          </div>

          {/* 右侧照片 */}
          <div className="about-photo-wrap reveal reveal-delay-2">
            <div className="photo-frame">
              <div className="photo-glow"></div>
              <img className="photo-image" src="assets/portrait.jpg" alt="杨百媚" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
