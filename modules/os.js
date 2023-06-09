const os = require("os");

const myOs = {
    userInfo: os.userInfo(),
    release: os.release(),
    uptime: os.uptime(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpu: os.cpus(),
}

console.log(myOs);