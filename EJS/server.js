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

  };
  res.render('about', { data: aboutData });
});

app.get('/profile', (req, res) => {
  const profileData = {
    title: 'Humber Info',
    user: {
      name: 'David',
      email: 'n01099486@Humber.ca',
      StartDate: 'Sept, 2024',
      EndDate: 'April, 2025'
    },
    stats: {
      React: 70,
      JavaScript: 62,
      HTML: 82,
      CSS: 87,
    }
  };
  res.render('profile', { data: profileData });
});


app.get('/settings', (req, res) => {
  const settingsData = {
    title: 'Settings',
    categories: [
      {
        name: 'Account',
        options: ['Edit Profile', 'Change Password', 'Grades']
      },
      {
        name: 'Tuition',
        options: ['Amount', 'Aid', 'Timetable']
      },
      {
        name: 'Professors',
        options: ['Mark', 'Dylan', 'Fagun']
      }
    ]
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


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
