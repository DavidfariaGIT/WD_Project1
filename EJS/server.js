const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/products.js');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/', (req, res) => {
  const homeData = {
  };
  res.render('home', { data: homeData });
});

// DATABASE
mongoose.connect('mongodb+srv://stacytran221:8lAkMu8OPwbvU9SC@database.hwknlb0.mongodb.net/Products?retryWrites=true&w=majority&appName=Database')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log("Failed to connect to MongoDB!")); // Error message if the connection fails

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// CREATE
app.post('/api/products', async (req, res) => { // /api/products is where I've decided the API lives
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product); // 201 indicates successful creation btw
  } catch (err) {
    res.status(500).json({ message: err.message }); // 500 is server error
  }
});

// Read
// Get All
app.get('/api/products', async (req, res) => { 
  try {
    const allProducts = await Product.find({});
    res.status(200).json(allProducts)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get by ID
app.get('/api/products/:id', async (req, res) => { // :id communicates a placeholder with the indicated value
  try {
    const { id } = req.params; // Taking the ID from the product so we can use it for our search
    const idProduct = await Product.findById(id); // Exactly what it says on the can (finding by ID)
    res.status(200).json(idProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product does not exist!" }); // Feedback for product search with an invalid ID
    }
    const updateProduct = await Product.findById(id); // Feedback for product update
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id); // Feedback for product deletion

    if (!product) {
      return res.status(404).json({ message: "Product does not exist!"}); // Feedback for product search with an invalid ID
    }
    res.status(200).json({ message: "Product has been deleted."}); // Feedback for product deletion
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// PAGES
app.get('/about', (req, res) => {
  const aboutData = {
    school: 'Humber',
    years: '2024-2025',
    description: 'I am currently attending Web Design and Development in Humber College',
    since: '2023',
    info: "Building custom keyboards allows you to create a unique, personalized typing experience tailored to your needs and preferences. From selecting the right switches and keycaps to customizing the layout and design, every aspect of the keyboard can be optimized for comfort, aesthetics, and performance. Whether you're after a quieter keystroke or a more tactile feel, the possibilities are endless, making it an exciting project for enthusiasts and professionals alike."

  };
  res.render('about', { data: aboutData });
});

app.get('/profile', (req, res) => { // Fetching the products from the database
  fetch('http://localhost:8080/api/products')
  .then(response => response.json()) // turning the response into a json object
  .then(data => res.render( "profile", {data: data })) // rendering the profile page with the data
  .catch(error => res.status(500).send('Error fetching products'));
});


app.get('/settings', (req, res) => {
  const settingsData = {
    personOne: 'red',
    personTwo: 'green',
    personThree: 'blue',
    personFour: 'purple'
  };
  res.render('settings', { data: settingsData });
});


app.get('/contact', (req, res) => {
  const contactData = {
    header: 'Contact us'
  };
  res.render('contact', { data: contactData });
});

app.get('/page1', (req, res) => {
  const Test = {
    Title: 'Page One',
    test: 'two'
  }
  res.render('page1', { data: Test });
});

app.get('/page2', (req, res) => {
  const Test = {
    package: 'Basic Package',
    price: '$99',
    keycaps: 'Basic',
    swtiches: 'Standard',
    customization: 'Basic'
  }
  res.render('page2', { data: Test });
});

app.get('/page3', (req, res) => {
  const Test = {
    InfoOne: "I absolutely love my custom keyboard! It's exactly what I wanted, and the build quality is fantastic",
    InfoTwo: "The attention to detail in every component was amazing. Highly recommend"
  }
  res.render('page3', { data: Test });
});

app.get('/page4', (req, res) => {
  const Test = {
    Pone: 'A custom keyboard is a personalized keyboard where you can select the switches, keycaps, layout, and other features to suit your preferences',
    Ptwo: 'It usually takes about 1-2 weeks depending on the complexity of your customizations and order volume'

  }
  res.render('page4', { data: Test });
});

app.get('/page5', (req, res) => {
  const Test = {
    P: 'Sign up for our newsletter and get the latest updates on custom keyboards and exclusive deals.'
  }
  res.render('page5', { data: Test });
});

app.get('./footer', (req, res) => {
  const Footer = {
    Date: 'Mar 2025'
  }
  res.render('footer', { data: Footer });
});


