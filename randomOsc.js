let osc;
let fft;
let playing;
let frequency;
let freqArray;
let randomizedFreq;
let randfr;

/* function radioEqValue() {
    const frequency = document.querySelector('input[name="frequency"]:checked').value;
    radioEqFreq = int(frequency);
    return radioEqFreq;
} */

/* function oscPlaying() {
    osc.start();
    playing = true;
} */

/* function oscStopped() {
    osc.stop();
    playing = false;
} */

/* function playStopBtn() {
    if (playing == false) {
        oscPlaying();
        pSBtn.html('stop');
    } else {
        oscStopped();
        pSBtn.html('play');
    }
} */

function getGood() {
    if (frequency !== 0) {
        if (frequency === randfr) {
            osc.stop();
            alert('nice!');
            noLoop();
            window.location.reload();
        } else {
            osc.stop();
            alert('nou!');
            noLoop();
            window.location.reload();
        }
    }

}

function setup() {
    createCanvas(400, 400);

    osc = new p5.Oscillator(0, 'sine');
    osc.amp(0.25);

    fft = new p5.FFT();

    freqArray = document.getElementsByName('frequency');
    rF = int(random(1, freqArray.length));
    console.log(rF)
    randfr = int(freqArray[rF].value);

    /* for (let rF = 1; rF < freqArray.length; rF++) {
        randomizedFreq = int(freqArray[rF].value);
    } */

    /* pSBtn = createButton('play');
    pSBtn.mousePressed(playStopBtn); */

    osc.start();
}

function draw() {
    frequency = int(document.querySelector('input[name="frequency"]:checked').value);
    osc.freq(randfr);

    background(0);
    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(250);
    strokeWeight(2);
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();

    getGood();
}

/* function redraw() {
} */