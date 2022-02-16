class Processor {
    static Process(data) {
        var lines = data.split("\r\n");
        var rows = [];
        lines.forEach(row => {
            rows.push(row.split(";"))
        });
        
      return(rows);
    }

}

module.exports = Processor;