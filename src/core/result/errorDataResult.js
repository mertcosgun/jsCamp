import Result from "./result.js";

export default class ErrorDataResult extends Result {
  constructor(message, data) {
    super(message, false);
    this.data = data;
  }
}