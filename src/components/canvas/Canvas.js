import './canvas.css';
import * as React from 'react';
import * as PIXI from 'pixi.js';
import appleImage from '../../images/apple.png';
import bananaImage from '../../images/banana.png';
import bottleImage from '../../images/bottle.png';
import cocktailImage from '../../images/cocktail.png';
import coinImage from '../../images/coin.png';
import lemonImage from '../../images/lemon.png';
import moneyImage from '../../images/money.png';
import orangeImage from '../../images/orange.png';
import pearImage from '../../images/pear.png';
import strawberryImage from '../../images/strawberry.png';



const SPRITE_SIZE = 50
const COUNT_SPRITES = 5
const IMAGES_PATHS = [
    appleImage,
    bananaImage,
    bottleImage,
    cocktailImage,
    coinImage,
    lemonImage,
    moneyImage,
    orangeImage,
    pearImage,
    strawberryImage,
]
const arrTextures = IMAGES_PATHS.map(path => PIXI.Texture.from(path))



const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight - 100,
    backgroundColor: 0x733ed2,
    forceCanvas: true
})



export function reel(posX) {

    const arrSlots= []

    for (let i = 0; i < COUNT_SPRITES; ++i) {
        const sp = new PIXI.Sprite()
        sp.height = sp.width = SPRITE_SIZE
        sp.x = posX
        sp.y = i * SPRITE_SIZE
        app.stage.addChild(sp)
        arrSlots.push(sp)
    }


    const updateSlotsY = () => {
        for (let i = 0; i < arrSlots.length; ++i) {
            const sp = arrSlots[i]
            sp.y += 10

            if (sp.y > arrSlots.length * SPRITE_SIZE) {
                sp.y = 0
                sp.texture = arrTextures[Math.floor(Math.random() * arrTextures.length)]
            }
        }
    }

    app.ticker.add(updateSlotsY)
}


class Canvas extends React.Component {
  render() {
    document.body.appendChild(app.view);
    return (<></>);
  }
}

export default Canvas;
