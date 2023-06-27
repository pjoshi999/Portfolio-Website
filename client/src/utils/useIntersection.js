import { useEffect, useRef, useState } from "react";

const useIntersection = () => {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);
  useEffect(() => {
    // console.log(myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return [myRef, isVisible];
};

export default useIntersection;
