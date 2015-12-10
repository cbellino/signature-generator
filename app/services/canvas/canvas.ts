declare var window: any;

export class Canvas {

  options: Object = {
    allowTaint: false,
    logging: true,
    useCORS: true
  };

  getBase64FromElement(element: Element): Promise<string> {
    return window.html2canvas(element, this.options).then(this.canvasToBase64);
  }

  private canvasToBase64(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL();
  }
}
