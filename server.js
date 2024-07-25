const express = require("express");
const figlet = require("figlet");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/generate", (req, res) => {
  const text = req.body.text;

  figlet.text(
    text,
    {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 60,
      whitespaceBreak: true,
    },
    (err, asciiArt) => {
      if (err) {
        res.status(500).send("Error generating ASCII art");
        return;
      }
      res.send(asciiArt);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
