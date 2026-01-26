const textLayer = document.getElementById("text-layer");
const controlFontSize = document.getElementById("control-font-size");
const controlWght = document.getElementById("control-wght");

document.getElementById("preview").addEventListener("click", () => {
    textLayer.classList.remove("is-editing");
});


controlFontSize.oninput = (event) => {
    textLayer.style.fontSize = event.target.value + "px";
};

const toggleFontBtn = document.getElementById("toggle-font");

let isSerif = false;

if (toggleFontBtn && textLayer) {
    toggleFontBtn.addEventListener("click", () => {
        isSerif = !isSerif;

        textLayer.style.fontFamily = isSerif
            ? '"big-caslon-fb", serif'
            : '"aktiv-grotesk", sans-serif';
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

const body = document.body;
const themeButtons = document.querySelectorAll("#backgrounds button");

themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;

        body.classList.remove(
            "theme-1",
            "theme-2",
            "theme-3",
            "theme-4",
            "theme-5",
            "theme-6"
        );

        body.classList.add(theme);

        // Optional: visual active state
        themeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
