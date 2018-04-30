fetch('http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    return myJson.map(function(myJson) { 
        let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          span = createNode('span');
      img.src = myJson; 
      append(li, img); // Append all our elements
      append(li, span);
      append(ul, li);
    });
  });
//   const url = 'http://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true'; // Get 10 random users
//   fetch(url)
//   .then(function(data) {
//     console.log(data);
//     return response.json(data);

//   })
//   .catch(function(error) {
//     // If there is any error you will catch them here
//   });   