import Result from "./result.js";

export default class SuccessDataResult extends Result {
  constructor(message, data) {
    super(message, true);
    this.data = data;
  }
}
