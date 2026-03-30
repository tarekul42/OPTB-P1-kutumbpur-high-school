import "@testing-library/jest-dom";
import { vi } from "vitest";

Element.prototype.scrollTo = vi.fn();

window.matchMedia = vi.fn((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

class ResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
window.ResizeObserver = ResizeObserver;
global.ResizeObserver = ResizeObserver;

class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = "";
  thresholds: number[] = [];
  constructor() {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
global.IntersectionObserver = IntersectionObserver as unknown as typeof IntersectionObserver;
