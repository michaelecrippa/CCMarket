export class ValidationError extends Error {
  public key: string;
  public message: string;

  constructor(key: string, message: string) {
    super(message);
    this.key = key;
    this.message = message;
  }
}
