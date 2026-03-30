import 'react';

declare module 'react' {
  interface DOMAttributes<T> {
    onResize?: ReactEventHandler<T>;
    onResizeCapture?: ReactEventHandler<T>;
    nonce?: string;
  }
}

declare module 'jspdf' {
  export default class jsPDF {
    constructor(options?: Record<string, unknown>);
    setFillColor(r: number, g?: number, b?: number): this;
    rect(x: number, y: number, w: number, h: number, style?: string): this;
    setTextColor(r: number, g: number, b: number): this;
    setFontSize(size: number): this;
    setFont(font: string, style?: string): this;
    text(text: string, x: number, y: number, options?: Record<string, unknown>): this;
    setDrawColor(r: number, g?: number, b?: number): this;
    setLineWidth(width: number): this;
    line(x1: number, y1: number, x2: number, y2: number): this;
    save(filename: string): void;
  }
}

declare module '*.png' {
  const content: string;
  export default content;
}
