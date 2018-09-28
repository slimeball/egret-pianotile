class GameView extends egret.Sprite {

	public constructor() {
		super();
		this.init();
	}

	private _blockGroup: Array<BlockGroup>;
	private scoreText: egret.TextField;

	private init(): void {
		this._blockGroup = [];
		let len: number = GameData.row + 1;
		for (let i: number = 0; i < len; i++) {
			let boxg: BlockGroup = new BlockGroup();
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
	}
	public gamestart(): void {
		this.scoreText.text = String(GameData.getScore());
		let len: number = GameData.row + 1;
		for (let i: number = 0; i < len; i++) {
			this._blockGroup[i].createOne();
			this._blockGroup[i].y = GameData.getBlockHeight() * i;
		}
	}

	public move() {
		let len: number = GameData.row + 1;
		for (let i: number = 0; i < len; i++) {
			this._blockGroup[i].y += GameData.getBlockHeight();
			if (this._blockGroup[i].y > GameData.getStageHeight()) {
				this._blockGroup[i].y = 0;
				this._blockGroup[i].createOne();
			}
		}
	}

	private gameOver(evt: GameEvent = null): void {
		var event: GameEvent = new GameEvent(GameEvent.GAME_OVER);
		this.dispatchEvent(event);
	}

	private gamehit(evt: GameEvent): void {
		this.move();
		GameData.setScore(GameData.getScore()+1);
		this.scoreText.text = String(GameData.getScore());
	}
}