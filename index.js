var fs = require('fs');

module.exports = class Database {

    /**
     * @param path {string} - The database file path
     */
    constructor(path) {
        this.path = path
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, Buffer.from('{}', 'utf8').toString('base64'), 'utf8')
        }
    }

    /**
     * @returns {Record<any, any>}
     */
    fetch() {
        return JSON.parse(Buffer.from(fs.readFileSync(this.path, 'utf8'), 'base64').toString('utf8'))
    }

    /**
     * @param data {Record<any, any>}
     */
    save(data = {}) {
        return fs.writeFileSync(this.path, Buffer.from(JSON.stringify(data), 'utf8').toString('base64'), 'utf8')
    }

}

module.exports.Database = module.exports
