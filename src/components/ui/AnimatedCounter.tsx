"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value?: number;
  target?: number;
  suffix?: string;
  isDecimal?: boolean;
  decimals?: number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  target,
  suffix = "",
  isDecimal = false,
  decimals = 0,
  duration = 1.5,
}: AnimatedCounterProps) {
  const finalVal = value ?? target ?? 0;
  const hasDecimals = isDecimal || decimals > 0;
  const numDecimals = decimals > 0 ? decimals : 1;

  const [displayValue, setDisplayValue] = useState<string>(
    hasDecimals ? finalVal.toFixed(numDecimals) : finalVal.toString()
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * finalVal;

      setDisplayValue(
        hasDecimals ? current.toFixed(numDecimals) : Math.floor(current).toString()
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(
          hasDecimals ? finalVal.toFixed(numDecimals) : finalVal.toString()
        );
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, finalVal, hasDecimals, numDecimals, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}
