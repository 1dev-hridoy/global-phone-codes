const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT from environment or default to 3000

// Load JSON data from code.json
const phoneCodes = JSON.parse(fs.readFileSync('code.json', 'utf8'));

// Middleware to serve static files
app.use(express.static('public'));

// API endpoint to get phone codes
app.get('/api/phone-codes', (req, res) => {
    res.json(phoneCodes);
});

// Root endpoint to show data
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <title>Country Phone Codes</title>
    </head>
    <body class="bg-gray-100">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-2xl font-bold mb-4">Country Phone Codes</h1>
            <input id="search" type="text" placeholder="Search..." class="mb-4 px-4 py-2 border rounded w-full" />
            <table class="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Country</th>
                        <th class="py-3 px-6 text-left">Country Code</th>
                        <th class="py-3 px-6 text-left">Phone Code</th>
                        <th class="py-3 px-6 text-left">Action</th>
                    </tr>
                </thead>
                <tbody id="phoneCodesTable" class="text-gray-600 text-sm font-light">
                    ${phoneCodes.map(code => `
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6">${code.country}</td>
                        <td class="py-3 px-6">${code.country_code}</td>
                        <td class="py-3 px-6">${code.phone_code}</td>
                        <td class="py-3 px-6">
                            <button onclick="copyToClipboard('${code.phone_code}')" class="text-blue-500 hover:text-blue-700">
                                <i class="fas fa-copy"></i>
                            </button>
                        </td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <script>
            function copyToClipboard(text) {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        alert('Copied to clipboard: ' + text);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                    });
            }

            // Search function
            const searchInput = document.getElementById('search');
            const phoneCodesTable = document.getElementById('phoneCodesTable');
            searchInput.addEventListener('input', function() {
                const searchValue = this.value.toLowerCase();
                const rows = phoneCodesTable.getElementsByTagName('tr');

                for (let i = 0; i < rows.length; i++) {
                    const cells = rows[i].getElementsByTagName('td');
                    let found = false;

                    for (let j = 0; j < cells.length; j++) {
                        if (cells[j]) {
                            const cellText = cells[j].textContent.toLowerCase();
                            if (cellText.indexOf(searchValue) > -1) {
                                found = true;
                                break;
                            }
                        }
                    }

                    rows[i].style.display = found ? '' : 'none';
                }
            });
        </script>
    </body>
    </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
