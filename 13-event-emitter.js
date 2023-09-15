const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listener etter events
// emit - sender ut eventen

customEmitter.on("response",(name,id) => {     // response blir på en måte eventen sin id. Så du vil ha samme id på emit som on for at de skal henge sammen.
    console.log(`id: ${id}, navn: ${name}`);
});

customEmitter.on("response",(name,id) => {     // man kan ha så mange funksjoner man vil med et event.
    console.log(`annen logikk her`)     // rekkefølgen har noe å si, og man må bruke emit etter on for at det skal kjøre
})

customEmitter.emit("response","john",34)    // man kan hente inn parametre som i en funksjon