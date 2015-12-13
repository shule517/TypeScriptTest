/// <reference path="./Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="./Scripts/typings/tweenjs/tweenjs.d.ts" />
/// <reference path="./Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="./Scripts/typings/preloadjs/preloadjs.d.ts" />
/// <reference path="./Scripts/typings/soundjs/soundjs.d.ts" />
var Main = (function () {
    function Main() {
        var _this = this;
        this.update = function (event) {
            _this.background();
            _this.stage.update();
        };
        this.canvas = document.getElementById("canvas");
        this.stage = new createjs.Stage(this.canvas);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.addEventListener("tick", this.update);
        this.x = -200;
        createjs.Tween.get(this, {}).to({ x: this.canvas.width / 2 }, 2000, createjs.Ease.quartInOut);
    }
    Main.prototype.background = function () {
        var sky = new createjs.Shape();
        this.stage.addChild(sky);
        sky.graphics.beginLinearGradientFill(["#0069A0", "#00AAE4"], [0, 1], 0, 0, 0, 150);
        sky.graphics.drawRect(0, 0, 600, 150);
        /*
        var ground: createjs.Shape = new createjs.Shape();
        this.stage.addChild(ground);
        ground.graphics.beginLinearGradientFill(["#99CC33", "#7EB133"], [0, 1], 0, 150, 0, 200);
        ground.graphics.drawRect(0, 150, 600, 50);
        */
        var title = new createjs.Text("シュールJavascriptはじめました！！", "24px Myriad Pro", "#FFFFFF");
        this.stage.addChild(title);
        title.textAlign = "center";
        title.textBaseline = "bottom";
        title.x = this.x;
        title.y = 65;
        title.alpha = 0.6;
        /*
        var version: createjs.Text = new createjs.Text("[0.7.0]", "14px Myriad Pro", "#FFFFFF");
        this.stage.addChild(version);
        version.textAlign = "center";
        version.textBaseline = "bottom";
        version.x = this.canvas.width / 2;
        version.y = 80;
        version.alpha = 0.6;

        var subtitle: createjs.Text = new createjs.Text("basic", "20px Myriad Pro", "#FFFFFF");
        this.stage.addChild(subtitle);
        subtitle.textAlign = "center";
        subtitle.textBaseline = "bottom";
        subtitle.x = this.canvas.width / 2;
        subtitle.y = 120;
        subtitle.alpha = 0.6;

        var publish: createjs.Text = new createjs.Text("authoring: Sublime Text + TypeScript [CreateJS]", "14px Myriad Pro", "#FFFFFF");
        this.stage.addChild(publish);
        publish.textAlign = "right";
        publish.textBaseline = "bottom";
        publish.x = this.canvas.width - 10;
        publish.y = 20;
        publish.alpha = 0.6;
        */
    };
    return Main;
})();
window.onload = function () {
    var main = new Main();
};
//# sourceMappingURL=app.js.map