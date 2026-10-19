export type Grid=Uint8Array;
export const size=60;
export function nextGeneration(cells:Grid,width:number,height:number):Grid {
  const next=new Uint8Array(cells.length);
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    let neighbors=0;
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
      if(dx===0&&dy===0)continue;
      const xx=x+dx,yy=y+dy;
      if(xx>=0&&xx<width&&yy>=0&&yy<height)neighbors+=cells[yy*width+xx];
    }
    const i=y*width+x;
    next[i]=neighbors===3||(cells[i]===1&&neighbors===2)?1:0;
  }
  return next;
}
export function preset(type:string,width:number,height:number):Grid{
 const grid=new Uint8Array(width*height);const cx=Math.floor(width/2),cy=Math.floor(height/2);
 const patterns:Record<string,number[][]>={
 glider:[[0,-1],[1,0],[-1,1],[0,1],[1,1]],
 pulsar:[[-2,-1],[-1,-1],[0,-1],[1,-1],[-2,1],[-1,1],[0,1],[1,1]],
 rpentomino:[[0,-1],[1,-1],[-1,0],[0,0],[0,1]],
 blinker:[[-1,0],[0,0],[1,0]]
 };
 for(const [dx,dy] of patterns[type]||patterns.glider){const x=cx+dx,y=cy+dy;if(x>=0&&x<width&&y>=0&&y<height)grid[y*width+x]=1;}
 return grid;
}
