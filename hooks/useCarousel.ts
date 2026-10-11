"use client";

import { useState, useCallback } from "react";

export function useCarousel(totalItems: number, initialIndex = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  }, [totalItems]);

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    goToSlide,
  };
}
