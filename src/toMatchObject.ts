class TestObj {
  a = null;
  constructor(a) {
    this.a = a;
  }
}

export default function obj(a) {
  return new TestObj(a);
}
