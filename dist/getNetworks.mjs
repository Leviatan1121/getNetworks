import os from 'os';
const getNetworks = () => {
    const networks = []
    const networkInterfaces = os.networkInterfaces();
    for (const interfaces of Object.values(networkInterfaces)) {
        for (const net of interfaces) {
            if (net.family != 'IPv4') continue
            let IP = net.address
            if (net.internal) IP = 'localhost'
            networks.push(IP);
        }
    }

    return networks
}

export default getNetworks