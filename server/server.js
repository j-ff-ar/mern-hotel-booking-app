import express from "express";
import "dotenv/config";
import cors from "cors";
import dns from "node:dns";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";



// Force Node.js to use Google and Cloudflare public DNS resolvers
dns.setServers(['8.8.8.8', '1.1.1.1']); 

// Your existing Mongoose / MongoDB connection logic goes below



connectDB();

const app = express();

app.use(cors()); // This will allow requests from any origin. You can configure it to allow only specific origins if needed.

//MiddleWare
app.use(express.json())
app.use(clerkMiddleware())


//API to listen to clerk Webhooks
app.use("/api/clerk", clerkWebhooks);


app.get('/', (req,res)=>res.send('API is Working....'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
