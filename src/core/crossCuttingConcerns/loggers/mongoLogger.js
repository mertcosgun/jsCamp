import BaseLogger from "./baseLogger.js";

export default class MongoLogger extends BaseLogger {
  constructor() {
    super();
    this.logs = [];
  }

  log(message, data) {
    this.logs.push({ message, data });
  }
  logWithOutData(message) {
    this.logs.push({message})
  }

  getLogs() {
    return this.logs;
  }
}
