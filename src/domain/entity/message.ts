export default class Message {
  constructor(
    private content: string,
    private senderId: string,
    private date?: Date
  ) {
    if (!this.validate(content, senderId))
      throw new Error('Message cannot be empty and id must be valid');

    this.date = date || new Date();
    this.senderId = senderId;
    this.content = content;
  }

  private validate(content: string, senderId: string): boolean {
    return content.length > 0 && senderId !== '';
  }

  public getMessage(): string {
    return this.content;
  }

  public getSenderId(): string {
    return this.senderId;
  }

  public getDate(): Date | undefined {
    return this.date || undefined;
  }
}
