import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const endPoint = "https://devcore02.cimet.io/v1/generate-token";

const electricityEndpoint = "https://devcore02.cimet.io/v1/plan-list";


app.post("/postToken", async (req, res) => {
  const fetchOptions = {
      method: "POST",
      headers: { "api-key": "4NKQ3-815C2-8T5Q2-16318-55301" }
  }
  const response = await fetch(endPoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.post("/getElectricity", async (req, res) => {
  const payload = {
    session_id: req.body.session_id
  };
  const token = req.header('newtoken');

  fetch(electricityEndpoint, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
      "Auth-token": token
    }
  })
  .then(response => response.json()) 
  .then(json => {
    res.json(json);
  });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));