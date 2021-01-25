import { Vector3 } from "three";

class Model {
  constructor(public cell: Cell, public atoms: Atom[]) { }

  /**
   * xyzフォーマットから読み込む
   */
  static xyz2model(xyzstring: string): Model {
    const r = 8;
    const xyzvecs = xyzstring.split('\n');
    let atoms: Atom[] = [];
    xyzvecs.forEach(
      (str, i) => {
        // 0, 1行目はコメントと原子数なので無視する
        if (2 <= i) {
          // e.g. B 2.1 2.2 3.3
          const positionstr = str.split(/\s+/).slice(1, 4);
          const position = positionstr.map(
            (str) => r * parseFloat(str)
          );
          const atom = new Atom(1, position);
          atoms.push(atom);
        }
      }
    );
    const m = new Model(null, atoms);
    return m;
  }

  /**
   * xyz trajectry -> Model[]
   * @param {string} xyzstring
   * @return {Model[]}
   */
  static xyz2models(xyzstring: string): Model[] {
    let ms: Model[] = [];
    const lines = xyzstring.split('\n');
    const natom = parseInt(lines[0]);
    // 1 block : natom + 2 lines
    const oneblock = natom + 2;

    let i = 0;
    while ((i + 1) * oneblock <= lines.length) {
      const blocklines = lines.slice(i * oneblock, (i + 1) * oneblock);
      const m = Model.xyz2model(blocklines.join('\n'));
      ms.push(m);
      i += 1;
    }
    return ms;
  }
}

class Cell {
  a: Vector3;
  b: Vector3;
  c: Vector3;
}

class Atom {
  number: number;
  position: Vector3;

  constructor(n: number, p: number[]) {
    this.number = n;
    this.position = new Vector3(p[0], p[1], p[2]);
  }
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
