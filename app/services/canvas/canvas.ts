declare var window: any;

export class Canvas {

  getBase64FromElement(element: Element): Promise<string> {
    return window.html2canvas(element).then(this.canvasToBase64);
  }

  private canvasToBase64(canvas: HTMLCanvasElement): string {
    return canvas.toDataURL();
  }
}
