export class Post {

  constructor(
    public id: number, public title: string,
    public content: string,
    public loveIts: number,
    // tslint:disable-next-line: variable-name
    public created_at: Date) {
  }

}
