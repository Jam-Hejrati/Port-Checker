import { exec } from 'child_process';

// Define the range of ports to check
const startPort = process.argv[2] || 3000;
const endPort = process.argv[3] || 3005;

// Run the netstat command to get a list of listening ports
exec('netstat -a -n -p TCP', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error occurred while checking ports: ${err}`);
    return;
  }
  // Loop through each port in the range and check if it's in use
  for (let port = startPort; port <= endPort; port++) {
    if (stdout.includes(`:${port} `)) {
      console.log(`Port ${port} is in use`);
    } else {
      console.log(`Port ${port} is not in use`);
    }
  }
});
