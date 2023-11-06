## Installation

```bash
npm i @levihub/getnetworks
```

## Usage/Examples
#### Import the function
```javascript
const getNetworks = require('getnetworks');
// or
import getNetworks from 'getNetworks';
```

#### Call the function
```javascript
let networks = getNetworks(); // returns an array
console.log(networks); // [ '192.168.0.55', 'localhost' ] for example
```

#### Usage when running web servers
You can use it whenever you are running a web server.

```javascript
const runningOn = ['Server running on:'];

getnetworks().forEach(IP => runningOn.push(`'http://${IP}:${PORT}'`));

console.log(runningOn.join(' '));

// This could be the output from the console log:
// Server running on: 'http://192.168.0.55:8080' 'http://localhost:8080'
```