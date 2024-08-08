
// components/DropdownMenu.tsx
import React, { useState, useEffect } from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps {
  placeholder: string;
  options: string[];
  selectedOption: string;
  onSelect: (selectedOption: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, placeholder, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedOption]);

  const handleOptionClick = (option: string) => {
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : placeholder}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map(option => (
            <li key={option} className="dropdown-list-item" onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
