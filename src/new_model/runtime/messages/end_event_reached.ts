export class EndEventReachedMessage {

  public endEventId: string;
  public tokenPayload: string;

  constructor(endEventId: string, tokenPayload: any) {
    this.endEventId = endEventId;
    this.tokenPayload = tokenPayload;
  }
}
