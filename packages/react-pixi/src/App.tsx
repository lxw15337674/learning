import { useEffect, useState } from 'react'
import * as PIXI from 'pixi.js';

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log('render')
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);
    let sprite = PIXI.Sprite.from('https://pixijs.com/assets/files/sample-747abf529b135a1f549dff3ec846afbc.png');
    app.stage.addChild(sprite);


  },[])

  return (
    <div>123</div>
  )
}

export default App
 