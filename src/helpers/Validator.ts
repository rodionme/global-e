class Validator {
  _isValid(value: string, rule: RegExp) {
    return rule.test(value);
  }

  validateFirstName(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validateLastName(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validateEmail(value: string) {
    return this._isValid(value, /\S+@\S+\.\S+/);
  }

  validateStreet(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validateCity(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validateState(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validateZip(value: string) {
    return this._isValid(value, /^\d{5}(?:[-\s]\d{4})?$/);
  }

  validateUsername(value: string) {
    return this._isValid(value, /\w{2,}/);
  }

  validatePassword(value: string) {
    // Minimum eight characters, at least one letter and one number
    return this._isValid(value, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  }
}

export default new Validator();
