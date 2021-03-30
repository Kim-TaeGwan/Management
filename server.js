const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");
const mysql = require("mysql");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

const upload = multer({
  // 사용자 파일 업로드 공간
  dest: "./upload",
});

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  });
});

app.use("/image", express.static("./upload")); // 사용자가 실제로 접근을 해서 프로필 이미지를 확인할 수 있도록,image폴더에서 upload폴더를 접근하여 공유한다

app.post("/api/customers", upload.single("image"), (req, res) => {
  let sql = "INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)";
  let image = "/image/" + req.file.filename; // multer에서 filename이 겹치지 안도록 알아서 이름을 설정해줌
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
