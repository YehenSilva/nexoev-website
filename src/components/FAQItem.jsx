import { Plus } from 'lucide-react';

export default function FAQItem({ id, question, answer, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <h3>
        <button id={`q-${id}`} aria-expanded={open} aria-controls={`a-${id}`} onClick={onToggle}>
          {question}<Plus size={22} className="faq-item__icon" />
        </button>
      </h3>
      <div className="faq-item__panel" id={`a-${id}`} role="region" aria-labelledby={`q-${id}`}>
        <div><p>{answer}</p></div>
      </div>
    </div>
  );
}
