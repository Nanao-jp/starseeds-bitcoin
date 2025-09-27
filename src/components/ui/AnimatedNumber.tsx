"use client";

import CountUp from "react-countup";

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  className?: string;
}

export const AnimatedNumber = ({
  value,
  decimals,
  prefix,
  className,
}: AnimatedNumberProps) => {
  return (
    <CountUp
      end={value}
      decimals={decimals}
      decimal="."
      prefix={prefix}
      duration={2.5}
      separator=","
      className={className}
    />
  );
};
