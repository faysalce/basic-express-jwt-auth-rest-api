var express = require('express')
  , path = require('path')
  , app = express()
  , cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const jwt = require("jsonwebtoken");


app.use(cors());
const PORT = process.env.PORT || 3010;
app.set('port', process.env.PORT || 3010);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});
app.use(bodyParser.json());

app.post('/api/auth/submit-data', (req, res) => {
  console.log(req.body);

  
  return res.status(200).json({ success: true, data: req.body, message: 'Submit Successful!' });


})

app.post('/api/auth/signin', (req, res) => {
  console.log(req.body);

  const { password, username } = req.body;

  if (username == "client@client.com" && password == "1234") {
    const token = jwt.sign(
      { id: 1, username },
      "mortage",
      {
        expiresIn: "1h",
      }
    );
    var userData = {
      accessToken: token,
      name: "Faysal",
      username: "faysal.ce@gmail.com",
      email: "faysal.ce@gmail.com",
      fullName: "Shekh Mostafizur Rahman",
      id: 1,
      roles: ['client']

    }
    return res.status(200).json({ success: true, data: userData, message: 'Login Successful!' });

  } else if (username == "admin@admin.com" && password == "1234") {
    const token = jwt.sign(
      { id: 2, username },
      "mortage",
      {
        expiresIn: "24h",
      }
    );
    var userData = {
      accessToken: token,
      name: "Milon",
      username: "toskmilon@gmail.com",
      fullName: "SK Milon",
      id: 2,
      roles: ['admin']

    }
    return res.status(200).json({ success: true, data: userData, message: 'Login Successful!' });

  } else {
    return res.status(401).json({ success: false, message: 'User name or Password Mismatch' });

  }


});

app.post('/api/auth/signup', (req, res) => {
  console.log(req.body);

  const { name, email, phone, code, message } = req.body;



  return res.status(200).json({ success: true, message: 'Successfully! Sent mail' });

});
