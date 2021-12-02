export default class BaseLogger {
  constructor() {
    this.logs = [];
  }
  log(message, data) {
    this.logs.push({ message, data }); // {key: value} key ve value aynı isimde ise javascriptde direkt olarak value değeri geçilebilir.
  }
  logWithOutData(message) {
    this.logs.push({message})
  }

  getLogs() {
    return this.logs;
  }
}
