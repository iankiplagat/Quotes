export class Quote {
  constructor(
    public name: string,
    public quote: string,
    public author: string,
    public postTime: Date,
    public upVote: number,
    public downVote: number
  ) {}
}
