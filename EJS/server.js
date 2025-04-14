const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/products.js');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/', (req, res) => {
  const homeData = {
  };
  res.render('home', { data: homeData });
});

// DATABASE
mongoose.connect('mongodb+srv://stacytran221:8lAkMu8OPwbvU9SC@database.hwknlb0.mongodb.net/Products?retryWrites=true&w=majority&appName=Database')
  .then(() => console.log('Connected!'));

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});



// PAGES
app.get('/about', (req, res) => {
  const aboutData = {
    school: 'Humber',
    years: '2024-2025',
    description: 'I am currently attending Web Design and Development in Humber College',
    since: '2023',
    info:"Building custom keyboards allows you to create a unique, personalized typing experience tailored to your needs and preferences. From selecting the right switches and keycaps to customizing the layout and design, every aspect of the keyboard can be optimized for comfort, aesthetics, and performance. Whether you're after a quieter keystroke or a more tactile feel, the possibilities are endless, making it an exciting project for enthusiasts and professionals alike."

  };
  res.render('about', { data: aboutData });
});

app.get('/profile', (req, res) => {
  const profileData = {
    user: {
      name: 'Products',
      model: ' 129as09j301',
      ProdDate: 'Sept, 2025',
      Info: "Bears of a Fever, captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."

    },
    modelTwo: ' 111594j301',
    ProdDateTwo: 'Sept, 2024',
    InfoTwo: "Bears of a Fever, captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."
    }

  res.render('profile', { data: profileData });
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
   header:'Contact us'
    };
  res.render('contact', { data: contactData });
});

app.get('/page1', (req, res) => {
 const Test = {
  Title: 'Page One',
  test: 'two'
 }
res.render('page1', {data: Test });
});

app.get('/page2', (req, res) => {
  const Test = {
  package: 'Basic Package',
  price: '$99',
  keycaps: 'Basic',
  swtiches: 'Standard',
  customization: 'Basic'
  }
 res.render('page2', {data: Test });
 });

 app.get('/page3', (req, res) => {
  const Test = {
  InfoOne:"I absolutely love my custom keyboard! It's exactly what I wanted, and the build quality is fantastic",
  InfoTwo:"The attention to detail in every component was amazing. Highly recommend"
  }
 res.render('page3', {data: Test });
 });

 app.get('/page4', (req, res) => {
  const Test = {
   Pone: 'A custom keyboard is a personalized keyboard where you can select the switches, keycaps, layout, and other features to suit your preferences',
   Ptwo: 'It usually takes about 1-2 weeks depending on the complexity of your customizations and order volume'

  }
 res.render('page4', {data: Test });
 });

 app.get('/page5', (req, res) => {
  const Test = {
   P: 'Sign up for our newsletter and get the latest updates on custom keyboards and exclusive deals.'
  }
 res.render('page5', {data: Test });
 });

 app.get('./footer', (req, res) => {
  const Footer = {
    Date:'Mar 2025'
  }
  res.render('footer', {data: Footer});
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
