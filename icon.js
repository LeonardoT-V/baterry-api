const batteryIconSVG = {
  full: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="8" x2="160" y2="8" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="64" y="40" width="128" height="200" rx="16" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="80" x2="160" y2="80" fill="none" stroke="currentcolor" class="bar-blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="120" x2="160" y2="120" fill="none" stroke="currentcolor" class="bar-green" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="currentcolor" class="bar-yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="200" x2="160" y2="200" fill="none" stroke="currentcolor" class="bar-red" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`,
  high: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="8" x2="160" y2="8" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="64" y="40" width="128" height="200" rx="16" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="120" x2="160" y2="120" fill="none" stroke="currentColor" class="bar-green"  stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="currentColor" class="bar-yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="200" x2="160" y2="200" fill="none" stroke="currentColor" class="bar-red"  stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`,
  medium: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="8" x2="160" y2="8" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="64" y="40" width="128" height="200" rx="16" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="currentColor" class="bar-yellow"  stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="200" x2="160" y2="200" fill="none" stroke="currentColor" class="bar-red" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`,
  low: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="8" x2="160" y2="8" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="64" y="40" width="128" height="200" rx="16" fill="none" stroke="currentColor" class="bar-border" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="200" x2="160" y2="200" fill="none" stroke="currentColor" class="bar-red" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="96" x2="128" y2="136" fill="none" stroke="currentColor" class="bar-red" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="172" r="12" stroke="currentColor" class="bar-red" fill="var(--color-red)"/><line x1="96" y1="8" x2="160" y2="8" fill="none" stroke="currentColor" class="bar-border"stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="64" y="40" width="128" height="200" rx="16" fill="none" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round" stroke-width="12" class="bar-border"/></svg>`,
};

export function selectorIcon(level) {
  if (level === 1) {
    return batteryIconSVG.full;
  } else if (level >= 0.8) {
    return batteryIconSVG.high;
  } else if (level >= 0.5) {
    return batteryIconSVG.medium;
  } else if (level >= 0.25) {
    return batteryIconSVG.low;
  } else {
    return batteryIconSVG.warning;
  }
}
