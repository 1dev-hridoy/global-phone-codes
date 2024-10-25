﻿# Global Phone Codes API

A simple API that provides a list of country names, their respective country codes, and phone codes. This API is designed for easy integration into applications that require country-related information.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Fetches a list of countries with their phone codes and country codes.
- Provides a web interface to display the data.
- Search functionality to filter countries by name, country code, or phone code.
- Copy phone codes to the clipboard with a simple button click.

## Demo

You can access the live API here: [Global Phone Codes API](https://global-phone-codes.onrender.com)

## API Endpoints

### Get Phone Codes

- **Endpoint**: `/api/phone-codes`
- **Method**: GET
- **Response**: Returns a JSON array containing the country name, country code, and phone code.

#### Example Response

```json
[
    {
        "country": "Bangladesh",
        "country_code": "BD",
        "phone_code": "+880"
    },
    {
        "country": "United States",
        "country_code": "US",
        "phone_code": "+1"
    }
    // ... additional countries
]
```

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/1dev-hridoy/global-phone-codes.git
   cd global-phone-codes-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   node index.js
   ```

4. Access the application:

   Open your browser and go to `http://localhost:3000`.

## Usage

- The API endpoint can be accessed at `/api/phone-codes`.
- The web interface displays the list of countries along with a search bar to filter results.
- You can copy phone codes by clicking the copy icon next to each phone code.

## Technologies Used

- Node.js: JavaScript runtime for building the application.
- Express: Web framework for Node.js.
- Tailwind CSS: Utility-first CSS framework for styling the web interface.
- Font Awesome: Icon library for adding icons to the interface.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes you would like to make.
