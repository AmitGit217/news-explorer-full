class Unauthorize extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

export default Unauthorize;
