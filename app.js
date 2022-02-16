var Reader = require("./Reader");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");

reader = new Reader();
writer = new Writer();

async function main() {
    var data = await reader.read("./file.csv");
    var dataProcessor = Processor.Process(data);
    var table = new Table(dataProcessor);
    var html = await HtmlParser.Parse(table);
    writer.Write(Date.now() + ".html", html);
    PDFWriter.WriterPDF(Date.now() + ".pdf", html);
}

main();