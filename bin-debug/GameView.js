var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameView.prototype.init = function () {
        this._blockGroup = [];
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            var boxg = new BlockGroup();
            this._blockGroup.push(boxg);
            this.addChild(boxg);
            boxg.addEventListener(GameEvent.GAME_OVER, this.gameOver, this);
            boxg.addEventListener(GameEvent.GAME_HIT, this.gamehit, this);
        }
        this.scoreText = new egret.TextField();
        this.scoreText.textColor = 0xff0000;
        this.scoreText.bold = true;
        this.scoreText.text = String(GameData.getScore());
        this.scoreText.size = 100;
        this.scoreText.x = (GameData.getStageWidth() - this.scoreText.width) / 2;
        this.scoreText.y = 50;
        this.addChild(this.scoreText);
    };
    GameView.prototype.gamestart = function () {
        this.scoreText.text = String(GameData.getScore());
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            this._blockGroup[i].createOne();
            this._blockGroup[i].y = GameData.getBlockHeight() * i;
        }
    };
    GameView.prototype.move = function () {
        var len = GameData.row + 1;
        for (var i = 0; i < len; i++) {
            this._blockGroup[i].y += GameData.getBlockHeight();
            if (this._blockGroup[i].y > GameData.getStageHeight()) {
                this._blockGroup[i].y = 0;
                this._blockGroup[i].createOne();
            }
        }
    };
    GameView.prototype.gameOver = function (evt) {
        if (evt === void 0) { evt = null; }
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    GameView.prototype.gamehit = function (evt) {
        this.move();
        GameData.setScore(GameData.getScore() + 1);
        this.scoreText.text = String(GameData.getScore());
    };
    return GameView;
}(egret.Sprite));
__reflect(GameView.prototype, "GameView");
//# sourceMappingURL=GameView.js.map