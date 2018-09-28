class StartGamePanel extends egret.Sprite {
	public constructor() {
		super();
		this.init();
	}

	private _bg: egret.Shape;
	private _gameTitle: egret.TextField;
	private _startBtn: egret.TextField;
	private init():void {
		this._bg = new egret.Shape();
		this._bg.graphics.beginFill(0);
		this._bg.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
		this._bg.graphics.endFill();
		this.addChild(this._bg);

		this._gameTitle = new egret.TextField();
		this._gameTitle.text = 'Piano Tiles';
		this._gameTitle.size = 120;
		this._gameTitle.textColor = 0xffffff;
		this._gameTitle.x = (GameData.getStageWidth() - this._gameTitle.width) / 2;
		this._gameTitle.y = 200;
		this.addChild(this._gameTitle);

		this._startBtn = new egret.TextField();
		this._startBtn.text = 'START';
		this._startBtn.textColor = 0xff0000;
		this._startBtn.size = 100;
		this._startBtn.x = (GameData.getStageWidth() - this._startBtn.width) / 2;
		this._startBtn.y = (GameData.getStageHeight() - this._startBtn.height) / 2;
		this.addChild(this._startBtn);
		this._startBtn.touchEnabled = true;
		this._startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click, this);
	}

	private click(evt: egret.TouchEvent): void {
		let evtObj = new GameEvent(GameEvent.GAME_START);
		this.dispatchEvent(evtObj);
	}
}