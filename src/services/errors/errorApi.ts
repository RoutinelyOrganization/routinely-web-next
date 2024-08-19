type bodyParams = { errors: { message: string }[] };

export class ErrorApi extends Error {
  status: number;
  body: string[] | undefined;
  constructor(status: number, body?: bodyParams, name?: string) {
    super();
    this.name = name || 'ErrorApi';
    this.status = status;
    this.body = body ? this.cleanErrormessages(body) : undefined;
  }

  private cleanErrormessages(body: bodyParams) {
    const { errors } = body;
    const newErrors: string[] = errors.map(error => {
      const { message } = error;
      return message;
    });
    return newErrors;
  }
}
