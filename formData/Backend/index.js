import "dotenv/config";
import express from "express";
import multer from "multer";


const upload = multer({ dest: 'uploads/' });
const app = express();
const port = process.env.PORT;




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
app.post("/form", (req, res) => {
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
