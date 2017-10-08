/**
 * Created by Yunzhe on 2017/10/4.
 */

'use strict';
let $canvas_spline = $('#splinecanvas');
let canvas_spline = $canvas_spline[0];
let $grainhandle = $("#grainhandle");
let $grainslider = $("#grainslider");
let $tensionhandle = $("#tensionhandle");
let $tensionslider = $("#tensionslider");
let $dotsizeslider = $("#dotsizeslider");
let $dotsizehandle = $("#dotsizehandle");
let $linewidthslider = $("#linewidthslider");
let $linewidthhandle = $("#linewidthhandle");
let $showdots = $('#showdots');
let $autodraw = $('#autodraw');
let $draw = $('#draw');
let $clear = $('#clear');
let $play = $('#play');
let $normalize = $('#normalize');
let $message = $('#spline-message');
let move = false;
let alt = false;
let isdragging = false;
let current_scale = 1;
let current_width = canvas_spline.width = window.innerWidth - 30;
let current_height = canvas_spline.height = window.innerHeight - 150;
let zeroX = current_width / 2;
let zeroY = current_height / 2;
let offsetX = 0;
let offsetY = 0;
function msg(msg) {
    console.log(msg);
    $message.text(msg);
}
$canvas_spline.translateCanvas({
    translateX: zeroX,
    translateY: zeroY
});
let bg_image = new Image('bg', 'static/images/rocket_1.png', 0, 0, 500, 500, 45, 0.5);
bg_image.draw();
resizeFnBox.push(function () {
    current_width = canvas_spline.width = window.innerWidth - 30;
    current_height = canvas_spline.height = window.innerHeight - 150;
    zeroX = current_width / 2;
    zeroY = current_height / 2;
    $canvas_spline.translateCanvas({
        translateX: zeroX,
        translateY: zeroY
    }).scaleCanvas({
        scale: current_scale
    }).translateCanvas({
        translateX: -offsetX,
        translateY: -offsetY
    }).drawLayers();
});
function scaleCanvas(scale, eX, eY) {
    let transX = (eX - zeroX) / current_scale + offsetX;
    let transY = (eY - zeroY) / current_scale + offsetY;
    $canvas_spline.translateCanvas({
        translateX: transX,
        translateY: transY
    }).scaleCanvas({
        scale: scale
    });
    $canvas_spline.translateCanvas({
        translateX: -transX,
        translateY: -transY
    }).drawLayers();
    current_scale *= scale;
    offsetX = transX - (eX - zeroX) / current_scale;
    offsetY = transY - (eY - zeroY) / current_scale;
}
canvas_spline.addEventListener("wheel", mouseEvent, true);
canvas_spline.addEventListener("mousedown", mouseEvent, true);
canvas_spline.addEventListener("mousemove", mouseEvent, true);
canvas_spline.addEventListener("mouseup", mouseEvent, true);
document.addEventListener("keydown", keyboardEvent, true);
document.addEventListener("keyup", keyboardEvent, true);
function mouseEvent(e) {
    e.preventDefault();
    alt = e.altKey === true;
    if (e.type === 'wheel') {
        scaleCanvas(e.wheelDelta > 0 ? 1.1 : 0.9, e.offsetX, e.offsetY);
    }
    else if (e.type === 'mousedown') {
        move = true;
    }
    else if (e.type === 'mousemove') {
        // msg(isdragging);
        if (move && alt && !isdragging) {
            $canvas_spline.translateCanvas({
                translateX: e.movementX / current_scale,
                translateY: e.movementY / current_scale
            }).drawLayers();
            offsetX -= e.movementX / current_scale;
            offsetY -= e.movementY / current_scale;
        }
    }
    else if (e.type === 'mouseup') {
        move = false;
        if (!alt && !isdragging) {
            // add control points;
            msg("Adding a new control point.");
            spline.addControlPoint((e.offsetX - zeroX) / current_scale + offsetX,
                (e.offsetY - zeroY) / current_scale + offsetY);
            msg("A new control point has been added.");
        }
    }
}
function keyboardEvent(e) {
    if (e.type === 'keydown') {
        if (e.keyCode === 18) {
            // Alt down
            alt = true;
            msg("Alt is down. You can drag the canvas with your mouse.");
        }
    }
    else if (e.type === 'keyup') {
        if (e.keyCode === 18) {
            // Alt up
            alt = false;
            msg("Alt is up.");
        }
        else if (e.keyCode === 80) {
            // P up. Remove the last point and everything related
            msg("P is up. Popping the last point and everything related.");
            spline.popControlPoint();
        }
    }
}
$draw.click(function (e) {
    e.preventDefault();
    spline.drawSpline();
});
$normalize.click(function (e) {
    e.preventDefault();
    spline.normalizeSpline(NORMALIZE_METHOD_TYPE_1);
});
$clear.click(function (e) {
    e.preventDefault();
    spline.removeAll();
});
$play.click(function (e) {
    e.preventDefault();
    spline.playAnimation();
});
$showdots.change(function () {
    spline.setShowDots($showdots[0].checked);
});
$autodraw.change(function () {
    spline.setAutoDraw($autodraw[0].checked);
});
$grainslider.slider({
    range: "min",
    min: 1,
    max: 50,
    value: 20,
    create: function() {
        $grainhandle.text($(this).slider("value"));
    },
    slide: function( event, ui ) {
        $grainhandle.text(ui.value);
        spline.setGrain(parseInt(ui.value));
    }
});
$tensionslider.slider({
    range: "min",
    min: 0,
    max: 1,
    value: 0.5,
    step: 0.01,
    create: function() {
        $tensionhandle.text($(this).slider("value"));
    },
    slide: function( event, ui ) {
        $tensionhandle.text(ui.value);
        spline.setTension(parseFloat(ui.value));
    }
});
$dotsizeslider.slider({
    value: CONTROL_POINT_SIZE_DEFAULT,
    range: "min",
    min: 3,
    max: 20,
    step: 1,
    animate: true,
    create: function() {
        $dotsizehandle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
        $dotsizehandle.text(ui.value);
        spline.setDotSize(parseInt(ui.value));
    }
});
$linewidthslider.slider({
    value: LINE_WIDTH_DEFAULT,
    range: "min",
    min: 3,
    max: 20,
    step: 1,
    animate: true,
    create: function() {
        $linewidthhandle.text($(this).slider("value"));
    },
    slide: function (event, ui) {
        $linewidthhandle.text(ui.value);
        spline.setLineWidth(parseInt(ui.value));
    }
});