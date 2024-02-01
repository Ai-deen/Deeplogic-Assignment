# Deeplogic Assignment - Web Scraper for Latest Stories on Time.com

This application provides a custom API to fetch the latest 6 stories from Time.com. It uses a basic approach to process HTML without relying on external libraries/packages.

## API Usage

### Endpoint

Makes a GET request to `http://<localhost>/getTimeStories` to retrieve the latest 6 stories.

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
