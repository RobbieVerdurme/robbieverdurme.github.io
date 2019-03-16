export class Post{
    //constructor
    constructor(
        private _img: string,
        private _title: string,
        private _comments = new Array<string>(),
        private _dateAdded = new Date()
    ){}

    //methods
    addComent(comment: string, auteur: string){
        this._comments.push(`${comment} ${auteur}`)
    }

    //get posts from jsonfile
    static fromJSON(json: any): Post{
        const post = new Post(json.img, json.title, json.comments, json.dateAdded);
        return post;
    }

    //getters 
    get img(): string{
        return this._img
    }

    get title(): string{
        return this._title
    }

    get comments(): string[]{
        return this._comments
    }

    get dateAdded(): Date{
        return this._dateAdded
    }

}