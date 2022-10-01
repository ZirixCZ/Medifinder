import express from "express";
import fetch from "node-fetch";
import fs from "fs";



const app = express();
const port = 8080;

app.get("/", (req: any, res: any) => {
  res.send("Hello world!");
});

var auth_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJvd29qNDg1OTdAY2l2aWtsaS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjExMjI1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTA5LTMwIiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NjQ2MDI5MDcsIm5iZiI6MTY2NDU5NTcwN30.6Jg5UfM5_K0Cw5-n_kvxnbC3KKd1zxgt3zqTO-Ofhaw";

app.get("/symptoms", async (req: any, res: any) => {
  let abc = await fetch(
    "https://sandbox-healthservice.priaid.ch/symptoms?token=" +
      auth_token +
      "&language=sk-sk"
  );
  if (!abc || !abc.ok) {
    res.status(500);
    res.send("fuck");
  }
  res.send(await abc.json());
});

app.get("/diagnosis", async (req: any, res: any) => {
  console.log(req.query.ids);
  let abc = await fetch(
    "https://sandbox-healthservice.priaid.ch/diagnosis?token=" +
      auth_token +
      "&language=sk-sk&symptoms=" +
      req.query.ids +
      "&gender=" +
      req.query.gender +
      "&year_of_birth=" +
      req.query.year_of_birth
  );
  if (!abc || !abc.ok) {
    res.status(500);
    res.send("fuck");
  }
  res.send(await abc.json());
});


app.get("/doctors", (req: any, res: any) => {
  fs.readFile('./assets/doctors.json', "utf8", function(err, data){
    if(err) throw err;
    res.send(data);
});
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
