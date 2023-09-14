const os = require('os');

// Info om brukeren:
const user = os.userInfo();
console.log(user);

// returnerer systemet sin uptime:
console.log(`Systemet sin uptime er ${os.uptime()/3600} timer`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}