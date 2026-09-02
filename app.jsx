/* 应用入口 - 滚动显示动画 hook */
const { useEffect, useRef } = React;

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function BackgroundLayer() {
  return (
    <div className="bg-layer">
      <div className="bg-gradient-orb bg-orb-1"></div>
      <div className="bg-gradient-orb bg-orb-2"></div>
      <div className="bg-gradient-orb bg-orb-3"></div>
      <div className="bg-grid"></div>
    </div>
  );
}

function App() {
  useRevealOnScroll();

  return (
    <div>
      <BackgroundLayer />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <footer className="footer">
        <p>
          © 2026 杨百媚 · 用 <span>热爱</span> 与 <span>行动</span> 创造价值
        </p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
