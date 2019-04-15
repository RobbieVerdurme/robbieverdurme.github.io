export class Comment {
    constructor(
        private _name: string,
        private _comment: string,
        private _dateAdded: Date
    ) { }

    static fromJSON(json: any): Comment {
        const ing = new Comment(json.name, json.comment, json.dateAdded);
        return ing;
    }

    toJSON(): any {
        return { name: this.name };
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