const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Started')
});

eventEmitter.on('end', () => {
    console.log('Ended')
})

eventEmitter.on('deploy', (name, date) => {
    console.log('Deployed %s at %s', name, date)
})
eventEmitter.emit('start')
eventEmitter.emit('deploy', 'App', new Date())
eventEmitter.emit('end')