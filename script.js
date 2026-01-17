const textLayer = document.getElementById("text-layer");
const controlFontSize = document.getElementById("control-font-size");
const controlWght = document.getElementById("control-wght");

controlFontSize.oninput = (event) => {
    textLayer.style.fontSize = event.target.value + "px";
};

const toggleFontBtn = document.getElementById("toggle-font");

let isSerif = false;

if (toggleFontBtn && textLayer) {
    toggleFontBtn.addEventListener("click", () => {
        isSerif = !isSerif;

        textLayer.style.fontFamily = isSerif
            ? '"Times New Roman", Times, serif'
            : 'Arial, Helvetica, sans-serif';
    });
}


// PDF Export
document.getElementById("export-pdf").addEventListener("click", async () => {
    const preview = document.getElementById("preview");

    // Screenshot des Preview Sections
    const canvas = await html2canvas(preview, {
        backgroundColor: "#ffffff", // Weißer Hintergrund
        scale: 2                    // höhere Qualität
    });

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
        orientation: "horizontal",
        unit: "px",
        format: [preview.offsetWidth, preview.offsetHeight]
    });

    pdf.addImage(imgData, "PNG", 0, 0, preview.offsetWidth, preview.offsetHeight);
    pdf.save("lettering_export.pdf");
});

const themeSelect = document.getElementById("control-theme");
const body = document.body;

// Initiales Theme setzen (falls HTML was anderes vorgibt)
body.className = themeSelect.value;

themeSelect.addEventListener("change", () => {
    body.className = themeSelect.value;
});
