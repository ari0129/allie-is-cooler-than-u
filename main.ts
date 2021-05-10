/**
 * At anytime, you can right-click on a block and select "help" for more info on the specific block and how it can be used.
 */
// To comment in your JS, use the double /
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.setVelocity(70, 70)
controller.moveSprite(mySprite)
mySprite.startEffect(effects.fire)
scene.cameraFollowSprite(mySprite)
