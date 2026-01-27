import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRegionLabel(region: string): string {
  const normalizedRegion = region.toLowerCase().trim();

  if (normalizedRegion === 'vosges') return 'dans les Vosges';
  if (normalizedRegion === 'alsace') return 'en Alsace';
  if (normalizedRegion === 'lorraine') return 'en Lorraine';
  if (normalizedRegion === 'suisse') return 'en Suisse';
  if (normalizedRegion === 'luxembourg') return 'au Luxembourg';
  if (normalizedRegion === 'grand est') return 'dans le Grand Est';

  // Default fallback
  return `en ${region}`;
}
