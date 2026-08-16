import React, { useState, useEffect } from 'react';

export const TypewriterRole = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === role) {
      // Pause at full word before deleting
      typingSpeed = 2200;
    } else if (isDeleting && currentText === '') {
      // Switch to next word after deleting
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== role) {
        setCurrentText(role.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(role.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === role) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="inline-flex items-center gap-2 py-1">
      <span className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-maroon-700 dark:text-maroon-300 tracking-tight">
        {currentText}
      </span>
      <span className="w-[2px] h-6 sm:h-8 bg-maroon-600 dark:bg-maroon-400 rounded-sm animate-blink inline-block" />
    </div>
  );
};
