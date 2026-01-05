if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = class DOMMatrix {
    a = 1
    b = 0
    c = 0
    d = 1
    e = 0
    f = 0

    constructor(init?: string | DOMMatrixInit) {
      if (typeof init === 'string') {
        const values = init.match(/[\d.]+/g)?.map(Number) || []
        if (values.length >= 6) {
          this.a = values[0] ?? 1
          this.b = values[1] ?? 0
          this.c = values[2] ?? 0
          this.d = values[3] ?? 1
          this.e = values[4] ?? 0
          this.f = values[5] ?? 0
        }
      } else if (init) {
        this.a = init.a ?? 1
        this.b = init.b ?? 0
        this.c = init.c ?? 0
        this.d = init.d ?? 1
        this.e = init.e ?? 0
        this.f = init.f ?? 0
      }
    }

    multiply(other: DOMMatrix): DOMMatrix {
      return new DOMMatrix({
        a: this.a * other.a + this.c * other.b,
        b: this.b * other.a + this.d * other.b,
        c: this.a * other.c + this.c * other.d,
        d: this.b * other.c + this.d * other.d,
        e: this.a * other.e + this.c * other.f + this.e,
        f: this.b * other.e + this.d * other.f + this.f
      })
    }

    translate(x: number, y: number): DOMMatrix {
      return this.multiply(
        new DOMMatrix({
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: x,
          f: y
        })
      )
    }

    scale(x: number, y?: number): DOMMatrix {
      return this.multiply(
        new DOMMatrix({
          a: x,
          b: 0,
          c: 0,
          d: y ?? x,
          e: 0,
          f: 0
        })
      )
    }

    rotate(angle: number): DOMMatrix {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return this.multiply(
        new DOMMatrix({
          a: cos,
          b: sin,
          c: -sin,
          d: cos,
          e: 0,
          f: 0
        })
      )
    }

    toString(): string {
      return `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`
    }
  } as typeof DOMMatrix
}
