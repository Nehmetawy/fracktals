/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                   @REACT IMPORT 
`                                                         `
```````````````````````````````````````````````````````````
*/
import p5 from 'p5';
import Complex from 'complex.js';
import { CX, CY, CANVAS_CENTER, P5 } from './main';
/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                   @VARIANBLES
`                                                         `
```````````````````````````````````````````````````````````
all varianbles that will be used
*/

export function Drawing() {
  for (let r = 0; r < CY * 2; r++) {
    for (let c = 0; c < CX * 2; c++) {
      const pxindex = (c + r * CX * 2) * 4;

      const a = P5.map(c, 0, CX * 2, -2, 2);
      const b = P5.map(r, 0, CY * 2, -2, 2);
      // check for iteration
      const zcplx = new Complex(0, 0);
      const ccplx = new Complex(a, b);
      const count = isConverging(zcplx, ccplx);

      var alpha = P5.map(count, 0, 100, 0, 255);
      P5.pixels[pxindex] = alpha;
      P5.pixels[pxindex + 1] = alpha;
      P5.pixels[pxindex + 2] = alpha;
      P5.pixels[pxindex + 3] = 255;
    }
  }
  P5.updatePixels();
}

function isConverging(z: Complex, c: Complex) {
  var znext = z.add(c);
  var count = 0;
  while (count < 100) {
    znext = znext.mul(znext);
    znext = znext.add(c);
    const mag = znext.abs();
    if (mag > 16) {
      return count;
    }
    count++;
  }
  return count;
}
