import { useState } from 'react';
import ContactModal from '../ui/ContactModal';

const CTA = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="cta container">
      <h2>Let’s build your data system</h2>
      <p>Open to freelance projects and remote opportunities.</p>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Contact Me
      </button>

      {/* This renders the modal only when the button is clicked */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default CTA;
