const express = require('express');
const path = require('path');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  const homeData = {


  };
  res.render('home', { data: homeData });
});


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
    title: 'Humber Info',
    user: {
      name: 'Mark',
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
    title: 'Colours',
    personOne: 'red',
    personTwo: 'green',
    personThree: 'blue',
    personFour: 'Purple'
};
  res.render('settings', { data: settingsData });
});


app.get('/contact', (req, res) => {
  const contactData = {
    title: 'Contact Me',
    address: '84 Coolstreet lane',
    phone: ' (555) 123-4567',
    email: 'n01099486@Humber.ca',
    hours: 'Monday - Friday: 8am - 5pm',
    socialMedia: {
      github: 'github.com/davidfariaGIT'
    }
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
   Title: 'Page 2',
   test: 'two'
  }
 res.render('page2', {data: Test });
 });

 app.get('/page3', (req, res) => {
  const Test = {
   Title: 'page 3',
   test: 'two'
  }
 res.render('page3', {data: Test });
 });

 app.get('/page4', (req, res) => {
  const Test = {
   Title: 'page 4',
   test: 'two'
  }
 res.render('page4', {data: Test });
 });

 app.get('/page5', (req, res) => {
  const Test = {
   Title: 'Page 5',
   test: 'two'
  }
 res.render('page5', {data: Test });
 });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
