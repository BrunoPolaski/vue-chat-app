export default class Email {
  constructor(private email: string) {
    if (!this.validate(email)) {
      throw new Error('Invalid email');
    }
  }

  private validate(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  public getEmail(): string {
    return this.email;
  }
}
