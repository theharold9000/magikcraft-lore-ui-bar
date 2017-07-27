const magik = magikcraft.io;

const Color = magik.Bars.Color;
export enum color {
    'GREEN' = magik.Bars.Color.GREEN,
    'RED' = magik.Bars.Color.RED,
    'PURPLE' = magik.Bars.Color.PURPLE,
    'PINK' = magik.Bars.Color.PINK,
    'WHITE' = magik.Bars.Color.WHITE,
    'YELLOW' = magik.Bars.Color.YELLOW
}

const Style = magik.Bars.Style;
export enum style {
    'NOTCHED_10' = magik.Bars.Style.NOTCHED_10,
    'NOTCHED_12' = magik.Bars.Style.NOTCHED_12,
    'NOTCHED_20' = magik.Bars.Style.NOTCHED_20
}
export function bar(_msg: string = "", player: BukkitPlayer = magik.getSender()) {
    let _bar, _color, _style;
    let Bar = {
        _bar,
        _msg,
        _color: magik.Bars.Color.RED,
        _progress: 0.5,
        _style: magik.Bars.Style.NOTCHED_20,
        _init: false
    } as any;
    Bar.show = function() {
        Bar._bar = magik.Bars.addBar(player,
            magik.TextComponent(Bar._msg + ""),
            Bar._color,
            Bar._style,
            Bar._progress // Progress (0.0 - 1.0)
        );
        Bar._init = true;
    }
    Bar.text = function (msg: string) {
        Bar._msg = msg;
        return Bar;
    };
    Bar.color = function (color: color) {
        Bar._color = color;
        return Bar;
    };
    Bar.style = function (style: style) {
        Bar._style = style;
        return Bar;
    };
    Bar.msg = function (msg: string) {
        Bar._msg = msg;
        return Bar;
    }
    Bar.progress = function (progress: number = 50) {
        Bar._progress = Math.min(progress / 100, 0.99);
        if (Bar._init) {
            Bar._bar.setProgress(progress);
        }
        return Bar;
    };
    Bar.addPlayer = function (player: BukkitPlayer) {
        if (Bar._bar.init) {
            Bar._bar.addPlayer(player);
        }
        return Bar;
    };
    Bar.removePlayer = function (player: BukkitPlayer) {
        if (Bar._bar.init) {
            Bar._bar.removePlayer(player);
        }
        return Bar;
    }
    return Bar;
}



