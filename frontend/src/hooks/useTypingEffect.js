import { useState, useEffect } from "react";

export default function useTypingEffect(words) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(prev => prev + 1);
      } else if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, words]);

  return words[index].substring(0, charIndex);
}