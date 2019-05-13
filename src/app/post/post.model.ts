import { Comment } from "./comment.model";

export class Post {
  //var
  private _id: number;

  //constructor
  constructor(
    private _img: string,
    private _title: string,
    private _description: string,
    private _comments = new Array<Comment>(),
    private _dateAdded = new Date()
  ) {}

  //methods
  addComent(name:string, comment: string) {
    this._comments.push(new Comment(name, comment));
  }

  //tojson
  toJSON(): any {
    return {
      id: this._id,
      img: this.img,
      title: this._title,
      description: this._description,
      comments: this._comments.map(com => com.toJSON()),
      created: this._dateAdded
    };
  }

  //get posts from jsonfile
  static fromJSON(json: any): Post {
    const post = new Post(
      json.img,
      json.title,
      json.description,
      json.comments.map(Comment.fromJSON),
      json.created
    );
    post._id = json.id;
    return post;
  }

  //getters
  get id(): number {
    return this._id;
  }

  get img(): string {
    return this._img;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  get dateAdded(): Date {
    return this._dateAdded;
  }
}
