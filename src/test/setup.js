import '@testing-library/jest-dom';

Element.prototype.scrollTo = vi.fn();

window.matchMedia = vi.fn((query) => ({
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
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;
global.ResizeObserver = ResizeObserver;

class IntersectionObserver {
  constructor() {
    this.root = null;
    this.rootMargin = '';
    this.thresholds = [];
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
global.IntersectionObserver = IntersectionObserver;
