export class Comment {
    //var 
    private id: number;

    //constructor
    constructor(
        private _name: string,
        private _comment: string,
        private _dateAdded: Date = new Date()
    ) {}

    //fromjson
    static fromJSON(json: any): Comment {
        const ing = new Comment(json.name, json.text, json.created);
        ing.id = json.id;
        return ing;
    }

    //tojson
    toJSON(): any {
        return { 
            id: this.id,
            name: this.name,
            Text: this.comment,
            created: this.dateAdded
         };
    }

    //getter
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