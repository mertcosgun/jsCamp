import ErrorDataResult from "../../result/errorDataResult.js";
import ErrorResult from "../../result/errorResult.js";
import Message from "../constants/message.js";

export default class ValidationTool {
  constructor() {
    this.errors = [];
    this.message = new Message();
  }

  fieldChecker(user, ...fields) {
    let hasError = false;
    let message = "";
    fields.map((field) => {
      if (!user[field]) {
        hasError = true;
        message = new ErrorDataResult(this.message.checkField(field), user);
        this.errors.push({ message, error: hasError });
      }
    });
    return { message, error: hasError };
  }

  ageChecker(user) {
    let hasError = false;
    let message= null;
    if (isNaN(+user.age) || user.age < 0 || user.age > 90) {
      hasError = true;
      message = new ErrorDataResult(
        `age alanı sayı olamak zorundadır.`,
        user
      );
      // console.log(message);
      this.errors.push({ message, error: hasError });
    }
    return { message, error: hasError };
  }

  // validate(user, ...fields) {
  //   let hasError = false
  //   let fieldCheckResult = !this.fieldChecker(user, ...fields)
  //   console.log(fieldCheckResult);
  //   if(!fieldCheckResult){
  //     this.ageChecker(user)
  //   } 
  //   if (this.errors.length > 1) {
  //     hasError = true
  //   }
  //   return hasError
  //   // let filterErrors = this.errors.filter((error) => error !== undefined);
  //   // console.log(filterErrors);
  //   // // filterErrors.length > 0 ? filterErrors : filterErrors[0]
  //   // if (filterErrors.length >= 1) {
  //   //   return filterErrors;
  //   // } else {
  //   //   return filterErrors[0];
  //   // }
  // }

  /*
  checkUserFieldsValidity(user, ...fields) {
    let hasError = false;
    let message = null;
    for (const field in fields) {
      if (!user[fields[field]]) {
        hasError = true;
        message = new ErrorDataResult(
          `Validation problem. ${fields[field]} is required`,
          user
        );
        this.errors.push(message);
      }
    }
    return hasError
  }

  checkAge(user) {
    let hasError = false;
    let message = null;
    if (Number.isNaN(Number.parseInt(user.age))) {
      hasError = true;
      message = new ErrorDataResult(
        `Validation problem. ${user.age} not a number.`,
        user
      );
      this.errors.push(message);

    }
    return hasError;
  }
*/
  getValidationErrors() {
    return this.errors;
  }
/*
  validate(user, ...fields) {
    // console.log(fields);
    this.checkUserFieldsValidity(user, ...fields);
    this.checkAge(user);
    let hasError = false;
    if(this.errors !== null && this.errors.length !== 0) {
      hasError = true
    } 
    return hasError
  }
*/
}
