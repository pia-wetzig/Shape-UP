// const svgFiles = [
//     "svgzwischenpräsi/SVG00001.svg",
//     "svgzwischenpräsi/SVG00002.svg",
//     "svgzwischenpräsi/SVG00003.svg",
//     "svgzwischenpräsi/SVG00004.svg",
//     "svgzwischenpräsi/SVG00005.svg",
//     "svgzwischenpräsi/SVG00006.svg",
//     "svgzwischenpräsi/SVG00007.svg",
//     "svgzwischenpräsi/SVG00008.svg",
//     "svgzwischenpräsi/SVG00009.svg",
//     "svgzwischenpräsi/SVG00010.svg",
//     "svgzwischenpräsi/SVG00011.svg",
//     "svgzwischenpräsi/SVG00012.svg",
//     "svgzwischenpräsi/SVG00013.svg",
//     "svgzwischenpräsi/SVG00014.svg",
//     "svgzwischenpräsi/SVG00015.svg",
//     "svgzwischenpräsi/SVG00016.svg",
//     "svgzwischenpräsi/SVG00017.svg",
//     "svgzwischenpräsi/SVG00018.svg",
//     "svgzwischenpräsi/SVG00019.svg",
//     "svgzwischenpräsi/SVG00020.svg",
//     "svgzwischenpräsi/SVG00021.svg",
//     "svgzwischenpräsi/SVG00022.svg",
//     "svgzwischenpräsi/SVG00023.svg",
//     "svgzwischenpräsi/SVG00024.svg",
//     "svgzwischenpräsi/SVG00025.svg",
//     "svgzwischenpräsi/SVG00026.svg",
//     "svgzwischenpräsi/SVG00027.svg",
//     "svgzwischenpräsi/SVG00028.svg",
//     "svgzwischenpräsi/SVG00029.svg",
//     "svgzwischenpräsi/SVG00030.svg",
//     "svgzwischenpräsi/SVG00031.svg",
//     "svgzwischenpräsi/SVG00032.svg",
//     "svgzwischenpräsi/SVG00033.svg",
//     "svgzwischenpräsi/SVG00034.svg",
//     "svgzwischenpräsi/SVG00035.svg",
//     "svgzwischenpräsi/SVG00036.svg",
//     "svgzwischenpräsi/SVG00037.svg",
//     "svgzwischenpräsi/SVG00038.svg",
//     "svgzwischenpräsi/SVG00039.svg",
    
// ];

const synth = new Tone.Synth().toDestination();

const svgCategories = {
    icons: [
        "./iconsrichtig/square1.svg",
        "./iconsrichtig/square2.svg",
        "./iconsrichtig/circle1.svg",
        "./iconsrichtig/circle2.svg",
        "./iconsrichtig/triangle1.svg",
        "./iconsrichtig/triangle2.svg",
        "./iconsrichtig/rechteck1.svg",
        "./iconsrichtig/rechteck2.svg",
        "./iconsrichtig/oval1.svg",
        "./iconsrichtig/oval2.svg",
        "./iconsrichtig/halfcircle1.svg",
        "./iconsrichtig/halfcircle2.svg",
        "./iconsrichtig/roundoffsquare1.svg",
        "./iconsrichtig/roundoffsquare2.svg",
        "./iconsrichtig/egg1.svg",
        "./iconsrichtig/egg2.svg",
        "./iconsrichtig/diamond1.svg",
        "./iconsrichtig/diamond2.svg",
        "./iconsrichtig/oneline.svg",
        "./iconsrichtig/threeline.svg",
        "./iconsrichtig/star51.svg",
        "./iconsrichtig/star52.svg",
        "./iconsrichtig/heart1.svg",
        "./iconsrichtig/heart2.svg",
        "./iconsrichtig/star41.svg",
        "./iconsrichtig/star42.svg",
        "./iconsrichtig/star101.svg",
        "./iconsrichtig/star102.svg",
        "./iconsrichtig/xflower1.svg",
        "./iconsrichtig/xflower2.svg",
        "./iconsrichtig/bling1.svg",
        "./iconsrichtig/bling2.svg",
        "./iconsrichtig/blume41.svg",
        "./iconsrichtig/blume42.svg",
        "./iconsrichtig/blume51.svg",
        "./iconsrichtig/blume52.svg",
        "./iconsrichtig/flower121.svg",
        "./iconsrichtig/flower122.svg",
        "./iconsrichtig/sun1.svg",
        "./iconsrichtig/sun2.svg",
        "./iconsrichtig/cloud1.svg",
        "./iconsrichtig/cloud2.svg",
        "./iconsrichtig/drop1.svg",
        "./iconsrichtig/drop2.svg",
        "./iconsrichtig/blitz1.svg",
        "./iconsrichtig/blitz2.svg",
        "./iconsrichtig/swirlr1.svg",
        "./iconsrichtig/swirlr2.svg",
        "./iconsrichtig/swirll1.svg",
        "./iconsrichtig/swirll2.svg",
        "./iconsrichtig/spongebobflower1.svg",
        "./iconsrichtig/spongebobflower2.svg",
        "./iconsrichtig/onenote1.svg",
        "./iconsrichtig/onenote2.svg",
        "./iconsrichtig/twonote1.svg",
        "./iconsrichtig/twonote2.svg",
        "./iconsrichtig/apple1.svg",
        "./iconsrichtig/apple2.svg",
        "./iconsrichtig/kirsche1.svg",
        "./iconsrichtig/kirsche2.svg",
        "./iconsrichtig/horsey1.svg",
        "./iconsrichtig/horsey2.svg",
        "./iconsrichtig/dragon1.svg",
        "./iconsrichtig/dragon2.svg",
    ],
    times: [
        "times/a.svg",
        "times/aa.svg",
        "times/b.svg",
        "times/bb.svg",
        "times/c.svg",
        "times/cc.svg",
        "times/d.svg",
        "times/dd.svg",
        "times/e.svg",
        "times/ee.svg",
        "times/f.svg",
        "times/ff.svg",
        "times/g.svg",
        "times/gg.svg",
        "times/h.svg",
        "times/hh.svg",
        "times/i.svg",
        "times/ii.svg",
        "times/j.svg",
        "times/jj.svg",
        "times/k.svg",
        "times/kk.svg",
        "times/l.svg",
        "times/ll.svg",
        "times/m.svg",
        "times/mm.svg",
        "times/n.svg",
        "times/nn.svg",
        "times/o.svg",
        "times/oo.svg",
        "times/p.svg",
        "times/pp.svg",
        "times/q.svg",
        "times/qq.svg",
        "times/r.svg",
        "times/rr.svg",
        "times/s.svg",
        "times/sss.svg",
        "times/t.svg",
        "times/tt.svg",
        "times/u.svg",
        "times/uu.svg",
        "times/v.svg",
        "times/vv.svg",
        "times/w.svg",
        "times/ww.svg",
        "times/x.svg",
        "times/xx.svg",
        "times/y.svg",
        "times/yy.svg",
        "times/z.svg",
        "times/zz.svg",
        "times/0.svg",
        "times/1.svg",
        "times/2.svg",
        "times/3.svg",
        "times/4.svg",
        "times/5.svg",
        "times/6.svg",
        "times/7.svg",
        "times/8.svg",
        "times/9.svg",
        "times/11.svg",
        "times/111.svg",
        "times/22.svg",
        "times/222.svg",
        "times/33.svg",
        "times/333.svg",
        "times/44.svg",
        "times/444.svg",
        "times/55.svg",
        "times/555.svg",
        "times/66.svg",
        "times/666.svg",
        "times/6666.svg",
        "times/66666.svg",
        "times/7777.svg",
        "times/88.svg",
        "times/888.svg",
        "times/8888t.svg",
        "times/88888.svg",
        "times/888888.svg",
        "times/88888888888.svg",
        "times/99.svg",
        "times/999.svg",
        "times/9999.svg",
        "times/999999.svg",
        "times/9999999.svg",
        "times/99999999.svg",

    ],
    helvetica: [
      "helvetica/Element 491.svg",
      "helvetica/Element 490.svg",
      "helvetica/Element 489.svg",
      "helvetica/Element 488.svg",
      "helvetica/Element 487.svg",
      "helvetica/Element 486.svg",
      "helvetica/Element 485.svg",
      "helvetica/Element 484.svg",
      "helvetica/Element 483.svg",
      "helvetica/Element 482.svg",
      "helvetica/Element 481.svg",
      "helvetica/Element 480.svg",
      "helvetica/Element 479.svg",
      "helvetica/Element 478.svg",
      "helvetica/Element 477.svg",
      "helvetica/Element 476.svg",
      "helvetica/Element 475.svg",
      "helvetica/Element 474.svg",
      "helvetica/Element 473.svg",
      "helvetica/Element 472.svg",
      "helvetica/Element 471.svg",
      "helvetica/Element 470.svg",
      "helvetica/Element 469.svg",
      "helvetica/Element 468.svg",
      "helvetica/Element 467.svg",
      "helvetica/Element 466.svg",
      "helvetica/Element 465.svg",
      "helvetica/Element 464.svg",
      "helvetica/Element 463.svg",
      "helvetica/Element 462.svg",
      "helvetica/Element 461.svg",
      "helvetica/Element 460.svg",
      "helvetica/Element 459.svg",
      "helvetica/Element 458.svg",
      "helvetica/Element 457.svg",
      "helvetica/Element 456.svg",
      "helvetica/Element 455.svg",
      "helvetica/Element 454.svg",
      "helvetica/Element 453.svg",
      "helvetica/Element 452.svg",
      "helvetica/Element 451.svg",
      "helvetica/Element 450.svg",
      "helvetica/Element 449.svg",
      "helvetica/Element 448.svg",
      "helvetica/Element 447.svg",
      "helvetica/Element 446.svg",
      "helvetica/Element 445.svg",
      "helvetica/Element 444.svg",
      "helvetica/Element 443.svg",
      "helvetica/Element 442.svg",
      "helvetica/Element 441.svg",
      "helvetica/Element 440.svg",
      "helvetica/Element 439.svg",
      "helvetica/Element 438.svg",
      "helvetica/Element 437.svg",
      "helvetica/Element 436.svg",
      "helvetica/Element 435.svg",
      "helvetica/Element 434.svg",
      "helvetica/Element 433.svg",
      "helvetica/Element 432.svg",
      "helvetica/Element 431.svg",
      "helvetica/Element 430.svg",
      "helvetica/Element 429.svg",
      "helvetica/Element 428.svg",
      "helvetica/Element 427.svg",
      "helvetica/Element 426.svg",
      "helvetica/Element 425.svg",
      "helvetica/Element 424.svg",
      "helvetica/Element 423.svg",
      "helvetica/Element 422.svg",
      "helvetica/Element 421.svg",
      "helvetica/Element 420.svg",
      "helvetica/Element 419.svg",
      "helvetica/Element 418.svg",
      "helvetica/Element 417.svg",
      "helvetica/Element 416.svg",
      "helvetica/Element 415.svg",
      "helvetica/Element 414.svg",
      "helvetica/Element 413.svg",
      "helvetica/Element 412.svg",
      "helvetica/Element 411.svg",
      "helvetica/Element 410.svg",
      "helvetica/Element 409.svg",
      "helvetica/Element 408.svg",
      "helvetica/Element 407.svg",
      "helvetica/Element 406.svg",
      "helvetica/Element 405.svg",
      "helvetica/Element 404.svg",
      "helvetica/Element 403.svg",
    ],

    flourishes: [
        "flourishes/SVG00001.svg",
        "flourishes/SVG00002.svg",
        "flourishes/SVG00003.svg",
        "flourishes/SVG00004.svg",
        "flourishes/SVG00005.svg",
        "flourishes/SVG00006.svg",
        "flourishes/SVG00007.svg",
        "flourishes/SVG00008.svg",
        "flourishes/SVG00009.svg",
        "flourishes/SVG00010.svg",
        "flourishes/SVG00011.svg",
        "flourishes/SVG00012.svg",
        "flourishes/SVG00013.svg",
        "flourishes/SVG00014.svg",
        "flourishes/SVG00015.svg",
        "flourishes/SVG00016.svg",
        "flourishes/SVG00017.svg",
        "flourishes/SVG00018.svg",
        "flourishes/SVG00019.svg",
        "flourishes/SVG00020.svg",
        "flourishes/SVG00021.svg",
        "flourishes/SVG00022.svg",
        "flourishes/SVG00023.svg",
        "flourishes/SVG00024.svg",
        "flourishes/SVG00025.svg",
        "flourishes/SVG00026.svg",
        "flourishes/SVG00027.svg",
        "flourishes/SVG00028.svg",
        "flourishes/SVG00029.svg",
        "flourishes/SVG00030.svg",
        "flourishes/SVG00031.svg",
        "flourishes/SVG00032.svg",
        "flourishes/SVG00033.svg",
        "flourishes/SVG00034.svg",
        "flourishes/SVG00035.svg",
        "flourishes/SVG00036.svg",
        "flourishes/SVG00037.svg",
        "flourishes/SVG00038.svg",
        "flourishes/SVG00039.svg",
        "flourishes/SVG00040.svg",
        "flourishes/SVG00041.svg",
        "flourishes/SVG00042.svg",
        "flourishes/SVG00043.svg",
        "flourishes/SVG00044.svg",
        "flourishes/SVG00045.svg",
        "flourishes/SVG00046.svg",
    ],
};

const categoryNames = Object.keys(svgCategories);
let currentCategoryIndex = 0;


const svgList = document.getElementById("svg-list");
const objectLayer = document.getElementById("object-layer");
const preview = document.getElementById("preview");

let activeSVG = null;

//TONE JS SOUND
document.body.addEventListener("click", async () => {
    await Tone.start();
    console.log("Audio ready");
}, { once: true });


let clickPlayer;
let audioReady = false;

async function initAudio() {
    if (audioReady) return;

    await Tone.start();

    clickPlayer = new Tone.Player({
        url: "mouse-click1.mp3",
        volume: -6
    }).toDestination();

    audioReady = true;
}

function playClick() {
    if (!audioReady || !clickPlayer) return;
    clickPlayer.start();
}

//BUTTON SOUNDS

document.getElementById("export-pdf").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("clear-canvas").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("backgrounds").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("toggle-svg-color").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("category-prev").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("category-next").addEventListener("click", async () => {
    await initAudio();
    playClick();
});

document.getElementById("control-scale").addEventListener("input", async () => {
    await initAudio();
    playClick();
});

document.getElementById("control-rotate").addEventListener("input", async () => {
    await initAudio();
    playClick();
});

//CATEGORIES SVGS
function renderSVGCategory() {
    svgList.innerHTML = "";

    const category = categoryNames[currentCategoryIndex];
    const files = svgCategories[category];

    files.forEach((path) => {
        const img = document.createElement("img");
        console.log(path)
        img.src = `./${path}`;
        img.classList.add("svg-thumb");
        img.draggable = true;

        img.addEventListener("click", () => spawnSVG(path));

        img.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", path);
            const dragIcon = new Image();
            dragIcon.src = path;
            e.dataTransfer.setDragImage(dragIcon, 40, 40);
        });

        svgList.appendChild(img);
    });

    updateCategoryLabel();
}

//NAVIGATION FOR SVG CATEGORIES
document.getElementById("category-prev").addEventListener("click", () => {
    currentCategoryIndex =
        (currentCategoryIndex - 1 + categoryNames.length) % categoryNames.length;
    renderSVGCategory();
});

document.getElementById("category-next").addEventListener("click", () => {
    currentCategoryIndex =
        (currentCategoryIndex + 1) % categoryNames.length;
    renderSVGCategory();

});

function updateCategoryLabel() {
    const label = document.getElementById("category-label");
    label.textContent = categoryNames[currentCategoryIndex].toUpperCase();
}


// Prevent default dragover und drop auf Preview
preview.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// Drop-Event auf Preview abfangen
preview.addEventListener("drop", (e) => {
    e.preventDefault();

    const path = e.dataTransfer.getData("text/plain");
    if (!path) return;

    // Position relativ zum Preview
    const rect = preview.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spawnSVG(path, x, y);
});

// SVG ins Objekt-Layer spawnen, mit optionaler Position
function spawnSVG(path, left = 50, top = 50) {
    const img = document.createElement("img");
    img.src = path;
    img.classList.add("draggable-svg");

    img.style.left = left + "px";
    img.style.top = top + "px";
    img.style.width = "120px";
    img.style.transform = "rotate(0deg)";

    objectLayer.appendChild(img);

    makeDraggable(img);

    img.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveSVG(img);
    });

    img.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        if (activeSVG === img) {
            img.remove();
            clearActiveSVG();
        }
    });
}

// Drag & Drop Funktion
function makeDraggable(el) {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    el.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        el.style.cursor = "grabbing";
        e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        el.style.left = e.clientX - offsetX + "px";
        el.style.top = e.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            el.style.cursor = "grab";
        }
    });
}


// SVG COLOR TOGGLE — ONLY AFFECTS THE SELECTED SVG

const colorToggleBtn = document.getElementById("toggle-svg-color");

colorToggleBtn.addEventListener("click", () => {
    // No SVG selected → do nothing
    if (!activeSVG) return;

    // activeSVG IS the <img> element
    // Toggle white/black by CSS filter
    activeSVG.classList.toggle("svg-white");
});



// Aktivieren und Steuern der Skalierung/Drehung
document.getElementById("preview").addEventListener("click", () => {
    clearActiveSVG();
});

function setActiveSVG(svg) {
    // REMOVE highlight from previously active SVG
    if (activeSVG) {
        activeSVG.classList.remove("selected");
    }

    // SET new active SVG
    activeSVG = svg;
    activeSVG.classList.add("selected");

    showTransformControls(true);

    const widthPx = parseFloat(svg.style.width) || 120;
    document.getElementById("control-scale").value = (widthPx / 120) * 100;

    const transform = svg.style.transform || "rotate(0deg)";
    const match = transform.match(/rotate\(([-\d.]+)deg\)/);
    const angle = match ? parseFloat(match[1]) : 0;
    document.getElementById("control-rotate").value = angle;
}


function clearActiveSVG() {
    activeSVG = null;
    showTransformControls(false);
}


document.getElementById("control-scale").addEventListener("input", (e) => {
    if (!activeSVG) return;

    const scalePercent = e.target.value;
    const newWidth = 120 * (scalePercent / 100);
    activeSVG.style.width = newWidth + "px";
});

document.getElementById("control-rotate").addEventListener("input", (e) => {
    if (!activeSVG) return;

    const angle = e.target.value;
    activeSVG.style.transform = `rotate(${angle}deg)`;
});


function clearCanvas() {
    // Remove all SVGs
    objectLayer.innerHTML = "";

    // Reset text
    const textLayer = document.getElementById("text-layer");
    if (textLayer) {
        textLayer.textContent = "..."; // initial placeholder
    }

    // Clear selection / active SVG
    if (typeof clearSelection === "function") {
        clearSelection();
    }

    if (typeof clearActiveSVG === "function") {
        clearActiveSVG();
    }

    // Reset transform sliders
    const scale = document.getElementById("control-scale");
    const rotate = document.getElementById("control-rotate");

    if (scale) scale.value = 100;
    if (rotate) rotate.value = 0;
}

document.getElementById("clear-canvas").addEventListener("click", () => {
    clearCanvas();
});


renderSVGCategory();
