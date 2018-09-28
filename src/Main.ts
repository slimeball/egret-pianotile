class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
        this.loadResource();
        this.init();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            // await RES.loadConfig("resource/default.res.json", "resource/");
            // await RES.loadGroup("preload", 0, loadingView);
            // this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    private gv: GameView;
    private gameStartPanel: StartGamePanel;
    private gameOverPanel: GameOverPanel;
    private init(): void {
        this.gv = new GameView();
        this.addChild(this.gv);
        this.gv.addEventListener(GameEvent.GAME_OVER, this.gameover, this);
        this.gameStartPanel = new StartGamePanel();
        this.gameStartPanel.addEventListener(GameEvent.GAME_START, this.gamebegin, this);
        this.addChild(this.gameStartPanel);
        this.gameOverPanel = new GameOverPanel();
        this.gameOverPanel.addEventListener(GameEvent.GAME_START, this.gamebegin, this);
    }

    private gameover(): void {
        this.gameOverPanel.updateScore();
        this.addChild(this.gameOverPanel);
    }
    private gamebegin(): void {
        GameData.setScore(0);
        this.gv.gamestart();
        if (this.gameStartPanel.parent) {
            this.removeChild(this.gameStartPanel);
        } else if (this.gameOverPanel.parent) {
            this.removeChild(this.gameOverPanel);
        }
    }
}