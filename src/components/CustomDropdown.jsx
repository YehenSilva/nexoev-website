import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import '../styles/CustomDropdown.css';

export default function CustomDropdown({
  options = [],
  value,
  onChange,
  disabled = false,
  placeholder = 'Select an option',
  className = '',
  name,
  id,
  ariaLabel,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleSelect = (opt) => {
    if (disabled) return;
    onChange(opt);
    setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`c-dropdown ${open ? 'is-open' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}
    >
      {name && <input type="hidden" name={name} value={value || ''} />}

      <button
        type="button"
        id={id}
        className="c-dropdown__trigger"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel || placeholder}
      >
        <span className="c-dropdown__value">{value || placeholder}</span>
        <ChevronDown
          size={16}
          className={`c-dropdown__chevron ${open ? 'is-rotated' : ''}`}
        />
      </button>

      {open && (
        <div className="c-dropdown__menu" role="listbox">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <button
                type="button"
                key={opt}
                role="option"
                aria-selected={isSelected}
                className={`c-dropdown__item ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleSelect(opt)}
              >
                <span>{opt}</span>
                {isSelected && <Check size={14} className="c-dropdown__check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

