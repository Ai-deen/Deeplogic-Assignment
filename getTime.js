const http = require("http");
const https = require("https");

// URL of the required website
const targetUrl = "https://time.com";

// Set verboseLogging to true to enable printing to the console
const verboseLogging = true;

// Create an HTTP server 
const server = http.createServer((req, res) => {
  if (req.url === "/getTimeStories" && req.method === "GET") {
    https
      .get(targetUrl, (response) => {
        let responseData = "";

        // Concatenate chunks of data recieved from the html page into one 
        response.on("data", (chunk) => {
          responseData += chunk;
        });

        // Processing the concatenated extracted data chunk
        response.on("end", () => {
          // Define a regex pattern to extract relevant information (title and link) from HTML code
          const dataPattern =
            /<li class="latest-stories__item">\s*<a href="([^"]+)">\s*<h3 class="latest-stories__item-headline">([^<]+)<\/h3>/g;

          // Array to store matched information
          const matchedItems = [];
          let match;

          // Iterate through matches and extract the required title and link pairs respectively
          while ((match = dataPattern.exec(responseData)) !== null) {
            matchedItems.push({
              title: match[2],
              link: `https://time.com${match[1]}`,
            });
          }

          // We want the top 6 stories, so extracting the required number of stories
          const RequiredData = matchedItems.slice(0, 6);

          // Writing the extracted data onto the server in json format
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(RequiredData, null, 2));

          // Print response data to the console if we get the data
          if (verboseLogging) {
            console.log("Response Data:", RequiredData);
          }
        });
      })
      .on("error", (error) => {
        // Handling error by responding with a 500 Internal Server Error
        console.error(error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));

        if (verboseLogging) {
          console.log("Error:", error);
        }
      });
  } else {
    // Respond with a 404 Not Found for any other path
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Not Found");
  }
});

// Specify the port for the server to listen on
const serverPort = 5000;
server.listen(serverPort, () => {
  console.log(`Server is running on http://localhost:${serverPort}`);
  console.log(`Access the extracted json information on http://localhost:${serverPort}/getTimeStories`);
});
