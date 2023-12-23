const html_to_pdf = require('html-pdf-node');
const fs = require('fs')

let options = { format: 'A4', scale: 1.15, format: 'A4', pageRanges: '1' };
let file = { url: "http://127.0.0.1:8080/resume.html" };
html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync('docs/praveen_kumar.pdf', pdfBuffer, {
        flag: "w+"
    });
    console.log("RESUME GENERATED");
});