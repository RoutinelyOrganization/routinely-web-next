export class ErrorApi extends Error {
  status: number;
  constructor(message: string, status: number, name?: string) {
    super(message);
    this.name = name || 'ErrorApi';
    this.status = status;
  }
}
