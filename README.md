# Delivery App
This is a web application developed by Jesús Morán for Catcher, using just a small sample of the technologies that I have been using in the last 5 years.

## Installation
The required technologies to run this application are Node and MongoDB latest version. To install all the project dependencies run `npm install --legacy-peer-deps` from the root folder. Once installed, run `npm run dev` and it will start the backend and the frontend. Visit your localhost url on the 5137 port where the user interface is deployed. For seeding the database I have created a script located on the root folder named 'mongo-init.js'. Open the Mongo Compass and create a connection to the database url (mongodb://localhost:27017/) and paste the first command of the script in the Mongo Shell. Refresh the connection and you should see the 'deliveryDB' database created. Paste the second command of the script and it will create documents in the 'orders' collection. Having any issue running the application please contact me.

## Technologies
The app uses React and Express as frameworks for the frontend and the backend, with a MongoDB database providing the data, all implemented with Typescript. Other remarkable used technologies are Vite, Mantine and Jest.

## Functionalities
Delivery App allows the user to retrieve the stored orders list and visualize it in a data table on a simple user interface. The application provide temporal pagination, so the user can select a date range to filter the results. 

## Testing
There is a Jest test for the API that you can try running `npm run test ./backend/tests/get-orders.spec.js -w backend/`. E2E or unitary testing are not provided due to lack of time, but ask for them if you are interested.
