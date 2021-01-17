import { Vector3 } from "three";

class Model {
  cell: Cell;
  atoms: Atom[];
}

class Cell {
  a: Vector3;
  b: Vector3;
  c: Vector3;
}

class Atom {
  number: number;
  position: Vector3;
}

class AtomicRenderParam {
  // sphere color
  color: number;
  // sphere radius
  radius: number;
}

const atomicrenderparams = {
  H: {
    color: 12,
    radius: 5.0
  },
  C: {
    color: 12,
    radius: 5.0
  },
  N: {
    color: 12,
    radius: 5.0
  },
  O: {
    color: 12,
    radius: 5.0
  },
  F: {
    color: 12,
    radius: 5.0
  },
  Ne: {
    color: 12,
    radius: 5.0
  },
  Na: {
    color: 12,
    radius: 5.0
  },
  Mg: {
    color: 12,
    radius: 5.0
  },
};
