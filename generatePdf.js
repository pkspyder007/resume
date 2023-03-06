const html_to_pdf = require('html-pdf-node');
const fs = require('fs')

let options = { format: 'A4', scale: 1.15, format: 'A4', pageRanges: '1' };
let file = { url: "http://localhost:3000/" };
html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync('docs/Praveen_Kumar_resume.pdf', pdfBuffer, {
        flag: "w+"
    });
    console.log("RESUME GENERATED");
});