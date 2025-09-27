"use client";

import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function AuroraBackground({ className, children, ...rest }: Props) {
  return (
    <div
      className={cn("relative isolate min-h-svh bg-background text-foreground", className)}
      {...rest}
    >
      {/* 背景レイヤー：極力シンプル。1枚のグラデーションをゆっくり横に流す */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0 blur-2xl animate-aurora",
          // グラデーション定義（暖色系の新しいパレット）
          "[--aurora:repeating-linear-gradient(100deg,var(--aurora-orange)_10%,var(--aurora-gold)_25%,var(--aurora-purple)_40%)]",
          "[background-image:var(--aurora)]",
          "[background-size:200%_100%]",
          "[background-position:50%_50%]"
          // 必要なら柔らかいマスクを足す：
          // "[mask-image:radial-gradient(120%_100%_at_50%_40%,black,transparent)]",
        )}
      />
      {/* コンテンツ */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
