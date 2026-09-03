/* Contact 组件 - 底部联系板块 + 留言弹窗 */
const { useState: useContactState } = React;

function ContactCopyButton({ text, children, variant }) {
  const [copied, setCopied] = useContactState(false);

  const handleCopy = async () => {
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
    <button
      className={`contact-btn contact-btn-${variant}`}
      onClick={handleCopy}
    >
      {variant === "white" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )}
      {copied ? "已复制 ✓" : children}
    </button>
  );
}

function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useContactState({ name: "", contact: "", message: "" });
  const [sent, setSent] = useContactState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `来自 ${form.name || "匿名"} 的留言 - 作品集网站`
    );
    const body = encodeURIComponent(
      `称呼/公司：${form.name}\n联系方式：${form.contact}\n\n留言内容：\n${form.message}`
    );
    window.location.href = `mailto:3448896807@qq.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", contact: "", message: "" });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h3 className="modal-title">联络与留言</h3>
        <p className="modal-subtitle">
          发送您的面试邀请或交流意向，我将在收到后第一时间回复。
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">您的称呼 / 公司</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="例如：张女士 / 某某科技HR"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">您的联系邮箱 / 电话</label>
            <input
              type="text"
              name="contact"
              className="form-input"
              placeholder="hr@example.com 或 手机号"
              value={form.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">意向岗位或留言内容</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="请简要说明岗位要求或沟通事项..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="modal-submit">
            {sent ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                发送成功
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                发送留言
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  const [isModalOpen, setIsModalOpen] = useContactState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <div className="contact-glow contact-glow-1"></div>
          <div className="contact-glow contact-glow-2"></div>

          <div className="contact-eyebrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            随时开放沟通 · 期待加入优秀团队
          </div>

          <h2 className="contact-title">
            感谢您的阅览，期待与您开启更多精彩故事。
          </h2>

          <p className="contact-desc">
            如果您正在寻找一位具备商业敏锐度、活动策划闭环能力、且执行扎实自驱的高潜力人才，欢迎随时通过邮件或电话与我取得联系。
          </p>

          <div className="contact-actions">
            <ContactCopyButton text="3448896807@qq.com" variant="white">
              复制个人邮箱
            </ContactCopyButton>
            <button
              className="contact-btn contact-btn-purple"
              onClick={() => setIsModalOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              在线发送留言
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

Object.assign(window, { Contact });
