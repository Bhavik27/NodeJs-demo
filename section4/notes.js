const fs = require('fs');

const getNotes = () => {
    return 'get note here'
}

const addNotes = (title, body) => {
    const notes = loadNotes();
}

const loadNotes = () => {
    const data = fs.readFileSync('test.json')
    const dataBuffer = data.toString();
    return JSON.parse(dataBuffer)
}

module.exports = {
    getNotes: getNotes,
    addNewNotes: addNotes
}