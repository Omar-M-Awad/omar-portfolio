interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        <h2>Send Me a Message</h2>
        <form action="https://formspree.io/f/mreabzjg" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
        <button onClick={onClose} style={{ marginTop: '1rem', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;