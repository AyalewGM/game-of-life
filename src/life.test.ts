import {describe,it,expect} from 'vitest';
import {nextGeneration,preset} from './life';
describe('Conway B3/S23 finite grid',()=>{
 it('blinker oscillates in two generations',()=>{const w=7,h=7,g=new Uint8Array(w*h);for(const x of [2,3,4])g[3*w+x]=1;const next=nextGeneration(g,w,h);expect([next[2*w+3],next[3*w+3],next[4*w+3]]).toEqual([1,1,1]);expect(nextGeneration(next,w,h)).toEqual(g)});
 it('stable block remains unchanged',()=>{const g=new Uint8Array(25);for(const i of [6,7,11,12])g[i]=1;expect(nextGeneration(g,5,5)).toEqual(g)});
 it('patterns are seeded without mutation of initial grid',()=>{const g=preset('glider',20,20);const snapshot=g.slice();nextGeneration(g,20,20);expect(g).toEqual(snapshot)});
 it('birth requires exactly three neighbors',()=>{const g=new Uint8Array(9);g[1]=g[3]=g[5]=1;expect(nextGeneration(g,3,3)[4]).toBe(1)});
});
