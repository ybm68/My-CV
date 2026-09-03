/* Hero 组件 - 首屏展示 */
function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-eyebrow">Personal Portfolio</div>
      <h1 className="hero-title">
        <span className="hero-title-shine hero-title-gradient hero-title-en" data-text="PORTFOLIO">
          PORTFOLIO
        </span>
        <br />
        <span className="hero-title-cn">个人作品集</span>
      </h1>
      <p className="hero-subtitle">欢迎收看</p>
      <div className="hero-tags">
        <span className="hero-tag">行动力强</span>
        <span className="hero-tag">沟通能力强</span>
        <span className="hero-tag">结果导向</span>
      </div>
      <div className="hero-scroll" onClick={scrollToAbout}>
        <span>SCROLL</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
