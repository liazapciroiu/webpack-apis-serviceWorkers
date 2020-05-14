// Not used because I used isuri package and input type url instead
function checkForUrl(inputUrl) {
  console.log('::: Running checkForURL :::');
  let urlRegex = /^(https?:\/\/)[/.a-zA-Z0-9-]+.[/.a-zA-Z0-9-]+.[/.a-zA-Z0-9-]+/;

  if (urlRegex.test(inputUrl)) {
    console.log('::: Valid URL :::');
    return true;
  } else {
    alert('Please enter a valid url');
    return false;
  }
}

export { checkForUrl }
