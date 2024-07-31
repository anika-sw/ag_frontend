import React, { useState } from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps {
  title: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : title}
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