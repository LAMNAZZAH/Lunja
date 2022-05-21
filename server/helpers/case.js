const { isNull } = require("../utils/generic");

const toLowerCase = (value) => {
    if (!isNull(value)) {
        const str = value.toString().trim(); 
        const toLowerCase = str.toLowerCase(); 
        return toLowerCase;
    }
}

module.exports = {
    toLowerCase,
}