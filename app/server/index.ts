import express from 'express';
import path from 'path';

const appRoot = path.resolve(__dirname, '../../');
const app = express();

// Serve static assets normally
app.use(express.static(path.resolve(appRoot, 'build/client')));

// Handle every other route with index.html
// Routing will happen in client-side
app.get('*', (_, res) => {
  res.sendFile(path.resolve(appRoot, 'build/client/index.html'));
});

app.listen({ port: 3000 }, () => {
  console.log('Server is running on port 3000');
});
