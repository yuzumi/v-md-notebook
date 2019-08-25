export default class Note {
  constructor(title, content, isFavorite = false) {
    const now = Date.now();

    this.id = String(now);
    this.title = title;
    this.content = content;
    this.isFavorite = isFavorite;
    this.createdAt = now;
  }

  static create(title, content, isFavorite) {
    return new Note(title, content, isFavorite);
  }
}
