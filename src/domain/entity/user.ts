export default class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private id?: string
  ) {
    if (!this.validate(name, email, password))
      throw new Error('User data is invalid');

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  private validate(name: string, email: string, password: string): boolean {
    return name.length > 0 && email.length > 0 && password.length > 0;
  }

  public getId(): string | undefined {
    return this.id || undefined;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }
}
