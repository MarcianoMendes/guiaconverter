var pdf = require("html-pdf");

class PDFWriter {
    static WriterPDF(filename, html) {
        pdf.create(html, { format: 'Letter' }).toFile(filename, function (error, res) {
            if (error) {
                console.log(error);
            }
        });
    }
}

module.exports = PDFWriter;