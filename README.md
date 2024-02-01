# Deeplogic Assignment - Web Scraper for Latest Stories on Time.com

This application provides a custom API to fetch the latest 6 stories from Time.com. It uses a basic approach to process HTML without relying on external libraries/packages.

## Implementation Details
The application is implemented in JavaScript.

To run this application, clone this github repository and open the current directory in which the file is present on Terminal or Vscode.

Run the file in the terminal using the command:

'''
node getTime.js
'''

## Dependencies
Just Node.Js is enough to run this application. No internal or external libraries/packages are used to process the HTML text. 

## API Usage

### Endpoint

Makes a GET request to `http://<localhost>/getTimeStories` to retrieve the latest 6 stories.
In this application, follow this link to get the required information:

http://localhost:5000/getTimeStories 

### Response

The API will respond with a JSON object array containing the latest 6 stories in the following format:

```json
[
  {
    "title": "Story Title 1",
    "link": "https://time.com/story1-link/"
  },
  {
    "title": "Story Title 2",
    "link": "https://time.com/story2-link/"
  },
  // ... (up to 6 stories)
]
