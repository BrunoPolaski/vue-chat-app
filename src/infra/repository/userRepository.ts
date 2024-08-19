export default class UserRepository {
  public createUser(name: string, email: string, password: string): void {
    const newUser = new User(name, email, password);
    this.users.push(newUser);
  }

  public getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.getEmail() === email);
  }

  public getUserById(id: string): User | undefined {
    return this.users.find((user) => user.getId() === id);
  }

  public getUsers(): User[] {
    return this.users;
  }

  public updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.getId() === user.getId());
    this.users[index] = user;
  }

  public deleteUser(user: User): void {
    this.users = this.users.filter((u) => u.getId() !== user.getId());
  }
}
