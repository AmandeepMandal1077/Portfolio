import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  // Parse the numeric value from string (e.g., "600+" -> 600, "1700+" -> 1700)
  const numericValue =
    typeof value === "string"
      ? parseInt(value.replace(/[^0-9]/g, ""), 10) || 0
      : value;

  // Extract suffix from value if present (e.g., "600+" -> "+")
  const extractedSuffix =
    typeof value === "string" ? value.replace(/[0-9,]/g, "") : suffix;

  useEffect(() => {
    if (isInView && !hasAnimated.current && numericValue > 0) {
      hasAnimated.current = true;

      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toLocaleString());
        },
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  // If for some reason animation hasn't triggered after mount and in view, show final value
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnimated.current && numericValue > 0) {
        setDisplayValue(numericValue.toLocaleString());
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [numericValue]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {extractedSuffix || suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
