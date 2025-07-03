import { useEffect, useRef, useState } from "react";

const useInView = (options = {}, resetOnExit = false) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else if (resetOnExit) {
        setInView(false);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options, resetOnExit]);

  return [ref, inView];
};

export default useInView;
