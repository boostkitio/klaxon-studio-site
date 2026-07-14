"use client";

import { useRef } from "react";
import ImageSlot from "@/components/ImageSlot";
import type { Project } from "@/lib/content";

/**
 * Matches the source's hoverPlay/hoverStop/freezeFrame behaviour: the
 * video never autoplays. It loads, seeks to a representative frame
 * (0.1s) and sits paused as a poster, then plays only while the
 * pointer is over the card and resets to the poster frame on leave.
 */
export default function ProjectMedia({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (project.video) {
    return (
      <div
        className="contents"
        onMouseEnter={() => {
          const v = videoRef.current;
          if (v) v.play().catch(() => {});
        }}
        onMouseLeave={() => {
          const v = videoRef.current;
          if (v) {
            v.pause();
            v.currentTime = 0.1;
          }
        }}
      >
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            const v = e.currentTarget;
            if (v.paused) v.currentTime = 0.1;
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }
  if (project.vimeoThumb) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.vimeoThumb} alt={project.client} className="absolute inset-0 w-full h-full object-cover" />;
  }
  return <ImageSlot />;
}
