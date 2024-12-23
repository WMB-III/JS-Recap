import {createRequire} from 'module'
const require = createRequire(import.meta.url)

const fs = require('fs')

export function addNote(title, body) {
    const notes = loadNotes()
    if (notes === undefined) {
        fs.writeFile('notes.json', "[]", (error, data) => {
            if (error) {
                console.log({error})
            } else {
                console.log(data)
            }
        })
    } else {
        notes.push({title,body, index: notes.length})
        
        saveNote(JSON.stringify(notes))
    }
}

export function removeNote(number) {
    const notes = loadNotes()
    const deletedNote = notes.splice(number,1)
    saveNote(JSON.stringify(notes))
    return JSON.stringify(deletedNote)
}

export function listNotes() {
    const notes = loadNotes()
    console.log(notes)
}

export function readNote(index) {
    const notes = loadNotes()
    console.log(index)
    console.log(notes.find(note => note.index === index))
    return JSON.stringify(notes.find(note => note.index === index))
}

export function loadNotes() {

    try {
        const dataBuffer = fs.readFileSync('notes.json', {encoding: 'utf8', flag: 'r'})
        return JSON.parse(dataBuffer)

    } catch (e) {
        console.log(e.message)
    }
}

function saveNote(notes) { 
    fs.writeFile('notes.json', notes, (error, data) => {
        if (error) {
            console.log({error})
        } else {
            console.log(data)
        }
    })
}