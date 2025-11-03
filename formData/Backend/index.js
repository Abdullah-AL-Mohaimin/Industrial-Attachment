import "dotenv/config";
import express from "express";
import multer from "multer";
//Convert URL to file path.
import { fileURLToPath } from 'url';
//Extract directory name from file path.
import { dirname } from 'path';
import path from 'path';


const app = express();
const port = process.env.PORT;

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname + "/uploads"));
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname; 
    cb(null, fileExtension);
  }
})

const upload = multer({ storage: storage });




// app.use(express.json());
app.use(express.urlencoded());

//Home route
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Welcome to server",
  });
});

// form data received route
app.post("/form",upload.single("photo"), (req, res) => {
  const { name, address } = req.body;
  console.log({ name, address });
  res.send("All OK");
});

//Error route
app.use((req, res) => {
  res.send({
    success: false,
    message: "Route Not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
