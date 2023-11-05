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