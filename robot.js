const bars = () => {
    const tl_bars = new TimelineMax({onComplete: bars});
    // const voiceBars = document.querySelector('#voice-bars')
    const barsElements = document.querySelectorAll('#voice-bars > *');

    const scale = () => {
        return Math.random() * 3;
    }

    const color = () => {
        const colors = ['green', 'yellow', 'blue', 'red', 'pink'];
        return colors[Math.floor(Math.random() * 5)];
    }

    tl_bars.set(barsElements, {y: -30, transformOrigin: '50% 50%'});
    tl_bars.staggerTo(barsElements, 0.7, {scaleY: scale, fill: color, repeat: 1, yoyo: true, ease: Bounce.easeIn}, .1)

    return tl_bars;
}

const blink = () => {
    const tl_blink = new TimelineMax({repeat: -1, repeatDelay: 2});
    const eyes = document.querySelectorAll('#eye-right, #eye-left');

    tl_blink.set(eyes, {transformOrigin: '50% 50%'})
    tl_blink.to(eyes, 0.2, {scaleY: 0, fill: '#231f20'});
    tl_blink.to(eyes, 0.2, {scaleY: 1, fill: '#48b3e6'});
    tl_blink.to(eyes, 0.2, {scaleY: 0, fill: '#231f20'});
    tl_blink.to(eyes, 0.2, {scaleY: 1, fill: '#48b3e6'});

    return tl_blink;
}

const move = (legs) => {
    const tl_move = new TimelineMax();

    tl_move.staggerTo(legs, 0.5, {y: -60, repeat: -1, yoyo: true, ease: Power0.easeNone}, 0.5)

    return tl_move;
}

const master = new TimelineMax();

master.add('start')
master.add(bars());
master.add(move(document.querySelectorAll('#leg-right, #leg-left')), 'start');
master.add(blink(), 'start')




