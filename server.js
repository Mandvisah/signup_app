const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User');

const app = express();

mongoose.connect('mongodb://localhost:27017/signup_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/signup', (req, res) => {
  res.render('signup', { error: null });
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check for existing username or email
    const existingUser = await User.findOne({ $or: [ { username }, { email } ] });
    if (existingUser) {
      return res.status(400).render('signup', { error: 'Username or email already exists.' });
    }
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('/signin');
  } catch (err) {
    res.status(500).render('signup', { error: 'Server error. Please try again.' });
  }
});

app.get('/signin', (req, res) => {
  res.render('signin');
});


app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.render('succesfully_signin', { username: user.username });
  } else if (username && password) {
    res.status(400).render('signin', { error: 'Invalid credentials' });
  } 
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
