class GameOverPanel extends egret.Sprite {
	public constructor() {
		super();
		this.init();
	}

	private _bg: egret.Shape;
	private _score: egret.TextField;
	private _tryagainBtn: egret.TextField;

	private init(): void {
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
	}

	public updateScore() {
		this._score.text = 'SCORE:' + String(GameData.getScore());
	}

	private tryagainFunc(): void {
		let evtObj = new GameEvent(GameEvent.GAME_START);
		this.dispatchEvent(evtObj);
	}
}