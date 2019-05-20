export class Comment {
    //var 
    private _id: number;

    //constructor
    constructor(
        private _name: string,
        private _comment: string,
        private _dateAdded: Date = new Date()
    ) {}

    //fromjson
    static fromJSON(json: any): Comment {
        const ing = new Comment(json.name, json.text, json.created);
        ing._id = json.id;
        return ing;
    }

    //tojson
    toJSON(): any {
        return { 
            id: this._id,
            text: this._comment,
            name: this._name,
            created: this._dateAdded
         };
    }

    //getter
    get id(){
        return this._id;
    }
    get name() {
        return this._name;
    }

    get comment() {
        return this._comment;
    }

    get dateAdded() {
        return this._dateAdded;
    }
}