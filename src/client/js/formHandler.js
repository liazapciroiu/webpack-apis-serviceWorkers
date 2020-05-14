// import { checkForUrl } from './urlChecker';

// Package for checking valid URL
var isUri = require('isuri');

function handleSubmit(event) {
  event.preventDefault();
  console.log('::: Form Submitted :::');

  // get user input
  let inputUser = document.getElementById('url').value;
  // check if URL is valid
  if (isUri.isValid(inputUser)) {
    console.log('::: URL valid :::');
    // POST to server and get response
    postData('http://localhost:7000/analysis', inputUser);
  }
  // if URL is not valid alert user
  else {
    alert('Please provide a valid URL');
  }
}

// POST user input to server
const postData = async (url = '', inputUrl) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: inputUrl }),
  });

  try {
    // store response
    const data = await response.json();
    // update UI
    document.getElementById('polarity').innerHTML += data.polarity;
    document.getElementById('subjectivity').innerHTML += data.subjectivity;
    document.getElementById('polarity-conf').innerHTML += data.polarity_confidence;
    document.getElementById('subjectivity-conf').innerHTML += data.subjectivity_confidence;
    document.getElementById('results').style.display = 'block';

    // Handle errors
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong! Please try a different URL.')
  }
}

module.exports = { handleSubmit, postData }
