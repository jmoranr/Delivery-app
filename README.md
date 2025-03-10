# Delivery App
This is a web application developed by Jesús Morán for Catcher, using just a small sample of the technologies that I have been using in the last 5 years.

## Installation
The whole application is dockerized so it should be ready with a 'docker compose up' command on the app root. Visit your localhost url on the 5137 port where the user interface is deployed. Having any issue running the application please contact me.

## Technologies
The app uses React and Express as frameworks for the frontend and the backend, with a MongoDB database providing the data, all implemented with Typescript. Other remarkable used technologies are Vite, Mantine and Jest.

## Functionalities
Delivery App allows the user to retrieve the stored orders list and visualize it in a data table on a simple user interface. The application provide temporal pagination, so the user can select a date range to filter the results. 

## Testing
There is a Jest test for the API that you can run navigating to the 'backend/tests' folder and running the command 'jest ./get-orders.spec.ts'. E2E or unitary testing are not provided due to lack of time, but ask for them if you are interested.
