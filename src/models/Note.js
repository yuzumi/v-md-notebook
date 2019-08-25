export default class Note {
  constructor(title, content) {
    const now = Date.now();

    this.id = String(now);
    this.title = title;
    this.content = content;
    this.createdAt = now;
  }

  static create(title, content) {
    return new Note(title, content);
  }
}
