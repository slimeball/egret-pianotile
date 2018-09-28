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
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameOverPanel.prototype.init = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0);
        this._bg.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        this._score = new egret.TextField();
        this._score.textColor = 0xff0000;
        this._score.bold = true;
        this._score.text = 'SCORE:' + String(GameData.getScore());
        this._score.size = 100;
        this._score.x = (GameData.getStageWidth() - this._score.width) / 2;
        this._score.y = 50;
        this.addChild(this._score);
        this._tryagainBtn = new egret.TextField;
        this._tryagainBtn.text = 'TRY AGAIN';
        this._tryagainBtn.size = 90;
        this._tryagainBtn.x = (GameData.getStageWidth() - this._tryagainBtn.width) / 2;
        this._tryagainBtn.y = (GameData.getStageHeight() - this._tryagainBtn.height) / 2;
        this.addChild(this._tryagainBtn);
        this._tryagainBtn.touchEnabled = true;
        this._tryagainBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.tryagainFunc, this);
    };
    GameOverPanel.prototype.updateScore = function () {
        this._score.text = 'SCORE:' + String(GameData.getScore());
    };
    GameOverPanel.prototype.tryagainFunc = function () {
        var evtObj = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(evtObj);
    };
    return GameOverPanel;
}(egret.Sprite));
__reflect(GameOverPanel.prototype, "GameOverPanel");
//# sourceMappingURL=GameOverPanel.js.map