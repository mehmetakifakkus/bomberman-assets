const allImages = [bombermanassetsSprites.mySprite,bombermanassetsSprites.myImagesv1Xi,bombermanassetsSprites.myImagespiqX0Z705Hpwt,bombermanassetsSprites.myImagesBYqZ9O3T218cay$zof,bombermanassetsSprites.mySprite2,bombermanassetsSprites.mySprite3,bombermanassetsSprites.mySprite4,bombermanassetsSprites.mySprite5,bombermanassetsSprites.mySprite6,bombermanassetsSprites.mySprite7,bombermanassetsSprites.mySprite8,bombermanassetsSprites.mySprite9,bombermanassetsSprites.mySprite10,bombermanassetsSprites.mySprite11,bombermanassetsSprites.mySprite12,bombermanassetsSprites.mySprite13,bombermanassetsSprites.mySprite14,bombermanassetsSprites.mySprite15,bombermanassetsSprites.mySprite16,bombermanassetsSprites.mySprite17,bombermanassetsSprites.mySprite18,bombermanassetsSprites.mySprite19,bombermanassetsSprites.mySprite20,bombermanassetsSprites.mySprite21,bombermanassetsSprites.mySprite22,bombermanassetsSprites.mySprite23,bombermanassetsSprites.mySprite24,bombermanassetsSprites.mySprite25,bombermanassetsSprites.mySprite26,bombermanassetsSprites.mySprite27,bombermanassetsSprites.mySprite28,bombermanassetsSprites.mySprite29,bombermanassetsSprites.mySprite30,bombermanassetsSprites.mySprite31,bombermanassetsSprites.mySprite32,bombermanassetsSprites.mySprite33,bombermanassetsSprites.mySprite34,bombermanassetsSprites.mySprite35,bombermanassetsSprites.mySprite36,bombermanassetsSprites.mySprite37,bombermanassetsSprites.mySprite38,bombermanassetsSprites.mySprite39,bombermanassetsSprites.mySprite40,bombermanassetsSprites.mySprite41,bombermanassetsSprites.mySprite42,bombermanassetsSprites.mySprite43,bombermanassetsSprites.mySprite44,bombermanassetsSprites.mySprite45,bombermanassetsSprites.mySprite46,bombermanassetsSprites.mySprite47,bombermanassetsSprites.mySprite48,bombermanassetsSprites.mySprite49,bombermanassetsSprites.mySprite50,bombermanassetsSprites.mySprite51,bombermanassetsSprites.mySprite52,bombermanassetsSprites.mySprite53,bombermanassetsSprites.mySprite54,bombermanassetsSprites.mySprite55,bombermanassetsSprites.mySprite56,bombermanassetsSprites.myTilestransparency16,bombermanassetsSprites.myTilestile1]

const padding = 10;
const speed = 50;
game.onUpdate(function() {
    for (const sprite of sprites.allOfKind(SpriteKind.Player)) {
        if (sprite.vx > 0 && sprite.x >= screen.width - padding) {
            sprite.x = screen.width - padding;
            sprite.vx = 0;
            sprite.vy = speed;
        }
        else if (sprite.vy > 0 && sprite.y >= screen.height - padding) {
            sprite.y = screen.height - padding;
            sprite.vx = -speed;
            sprite.vy = 0;
        }
        else if (sprite.vx < 0 && sprite.x <= padding) {
            sprite.x = padding;
            sprite.vx = 0;
            sprite.vy = -speed;
        }
        else if (sprite.vy < 0 && sprite.bottom <= 0) {
            sprite.destroy();
        }
    }
})

let index = 0;
game.onUpdateInterval(700, function() {
    const asset = sprites.create(allImages[index], SpriteKind.Player);
    asset.x = padding;
    asset.y = padding;
    asset.vx = speed;
    asset.setFlag(SpriteFlag.Ghost, true)
    index = (index + 1) % allImages.length;
})

let line1 = sprites.create(img`0`, SpriteKind.Food)
line1.say("PRESS A TO  ")

let line2 = sprites.create(img`0`, SpriteKind.Food)
line2.say("CHANGE COLOR")
line2.top += 10

let bgColor = 0;
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    scene.setBackgroundColor(bgColor);
    bgColor = (bgColor + 1) % 15
})