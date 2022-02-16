class Table{    
    constructor(array){
        this.header = array[0];
        array.shift();
        this.rows = array;
    }

    get RowsCount(){
        return(this.rows.length);
    }

    get ColumnsCount(){
        return(this.header.length);
    }

}

module.exports = Table;