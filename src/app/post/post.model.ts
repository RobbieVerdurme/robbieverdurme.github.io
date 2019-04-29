export class Post{
    //var
    private _id: number;

    //constructor
    constructor(
        private _img: string,
        private _title: string,
        private _description: string,
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

    //tojson
    toJSON(): any{
        return {
            id: this._id,
            img: this._img,
            title: this.title,
            description: this._description,
            comments: this._comments,
            created: this._dateAdded
        };
    }

    //getters 
    get id(): number{
        return this._id
    }

    get img(): string{
        return this._img
    }

    get title(): string{
        return this._title
    }

    get description(): string{
        return this._description
    }

    get comments(): string[]{
        return this._comments
    }

    get dateAdded(): Date{
        return this._dateAdded
    }

}