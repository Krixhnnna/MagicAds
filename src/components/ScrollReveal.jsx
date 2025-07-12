import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ScrollReveal = ({
  children,
  initial = { opacity: 0, y: 40 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.7, ease: 'easeOut' },
  threshold = 0.15,
  ...props
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [inView, controls, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 