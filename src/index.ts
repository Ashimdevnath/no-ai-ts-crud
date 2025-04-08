import app from './app.js';
import {config} from './config/dotenv.config.js';

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
})