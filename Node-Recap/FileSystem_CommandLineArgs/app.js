const yargs = require('yargs')
const { addNote, removeNote, listNotes, readNote } = require('./utils')

yargs.version('1.1.0')



yargs.command({
    command: 'Add',
     describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        addNote(argv.title, argv.body)
    }
 })

 yargs.command({
    command: 'Remove',
    describe: 'Remove a note',
    handler: (argv) => {
        const note = removeNote(argv.number)
        console.log(`You just removed the note ${note} at position ${argv.number}`)
    }
 })

yargs.command({
    command:'List', 
    describe:'List the notes',
    handler: () => listNotes()
})

yargs.command({command: 'Read', 
    describe: 'Read a note',
    handler: (argv) => {
        console.log(argv.number)
        const note = readNote(argv.number) 
        console.log(`Here is the note at index ${argv.number} ${note}`)
    }
})


yargs.parse();