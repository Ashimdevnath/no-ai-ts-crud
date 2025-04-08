
import { config } from './config/dotenv.config.js';
import app from './app.js'

app.listen(config.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${config.PORT}`);
})