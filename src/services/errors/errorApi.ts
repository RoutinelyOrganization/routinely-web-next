type bodyParams = { errors: { message: string }[] };

export class ErrorApi extends Error {
  status: number;
  body: string[] | undefined;
  constructor(status: number, body?: bodyParams, name?: string) {
    super();
    this.name = name || 'ErrorApi';
    this.status = status;
    this.body = body ? this.cleanErrorMessages(body) : undefined;
  }

  private cleanErrorMessages(body: bodyParams) {
    const { errors } = body;

    if (!errors) {
      return [];
    }

    const newErrors: string[] = errors.map(error => {
      const { message } = error;
      return message;
    });
    return newErrors;
  }
}
