import { PROFILE } from "@/constants/profile";

export function downloadCV(): void {
  if (typeof window === "undefined") return;

  const link = document.createElement("a");
  link.href = PROFILE.cv.path;
  link.download = PROFILE.cv.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
