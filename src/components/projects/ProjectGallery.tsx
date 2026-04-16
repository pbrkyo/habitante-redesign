"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const lightGalleryRef = useRef<{ instance: unknown } | null>(null);

  const onInit = useCallback((detail: { instance: unknown }) => {
    lightGalleryRef.current = detail;
  }, []);

  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgZoom, lgThumbnail]}
      elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-2"
    >
      {images.map((img, i) => (
        <a
          key={i}
          href={img}
          data-src={img}
          className="group relative overflow-hidden cursor-pointer"
          data-cursor="view"
        >
          <Image
            src={img}
            alt={`${title} - ${i + 1}`}
            width={600}
            height={400}
            className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-300" />
        </a>
      ))}
    </LightGallery>
  );
}
