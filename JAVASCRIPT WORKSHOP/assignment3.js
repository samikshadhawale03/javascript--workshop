fetch("https://dummyjson.com/quotes")
  .then(response => response.json())
  .then(data => {
    console.log("Quote:", data.quotes[0].quote);
    console.log("Author:", data.quotes[0].author);
  })
  .catch(error => console.log("Error:", error));