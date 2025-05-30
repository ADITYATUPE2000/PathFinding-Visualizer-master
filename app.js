var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app;