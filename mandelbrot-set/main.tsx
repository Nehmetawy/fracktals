/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                   @REACT IMPORT 
`                                                         `
```````````````````````````````````````````````````````````
*/
import p5 from 'p5';
import { Drawing } from './function';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                   @MAIN MANAGER
`                                                         `
```````````````````````````````````````````````````````````
*/
export var CX: number;
export var CY: number;
export var P5: p5;
export var CANVAS_CENTER: p5.Vector;
export function Manager() {}
Manager.initiate = (p: p5) => {
  P5 = p;
  CX = window.innerWidth / 2;
  CY = window.innerHeight / 2;
  CANVAS_CENTER = P5.createVector(CX, CY);
  p.loadPixels();
  p.pixelDensity(1);
  Drawing();
};

Manager.draw = () => {};
