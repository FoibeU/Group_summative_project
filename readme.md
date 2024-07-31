University Residence Management System (Staff Dashboard)
Overview
The University Residence Management System is a dashboard application designed to help university staff manage residence-related tasks. This includes functionalities like room management, maintenance requests, alerts, and notifications. The project utilizes local storage to save and retrieve data, ensuring persistence between sessions.


Installation or Usage
Clone the repository:

git clone https://github.com/FoibeU/Group_summative_project.git
cd Group_summative_project
Install dependencies:

This project relies on some external libraries. Make sure to include them in your index.html file:

Make sure you have the following libraries:
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Bootstrap CSS -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
Open the project:

Open index.html in your web browser to view the dashboard.

Technical Choices and Rationale
1. Local Storage for save and retriev data without backend,

2. jQuery is used for DOM and Handling AJAX requests

3. Bootstrap is used for styling and responsive design

4. Modular SCSS:SCSS is used for styling with a modular approach, making the CSS easier to maintain and extend.
Usage Instructions
1. Room Management:
View Rooms: The dashboard displays a table of rooms. Each room shows details such as room number, type, status, resident, and amenities.
Filter Rooms: Use the filter inputs to filter rooms by room number or status.
Sort Rooms: Click on the table headers to sort the rooms either by status, room types,room name.
2. Maintenance Requests:
View Requests: The maintenance requests section displays a list of requests with details such as request type, status and how far with the requests.
Filter Requests: Use the filter inputs to filter maintenance requests by request type or status.
3. Alerts and Notifications:
View Alerts: The dashboard includes a section for alerts and notifications. This section displays important updates and alerts for the residence staff.
4. Data Persistence:
Local Storage: All data entered and modified through the dashboard is saved in the browser's local storage, ensuring that your changes are preserved even if you close the browser or refresh the page.
You can also suitche from either black mode to withe mode at an page and you can add the new User 

we are open for any contributions feel free to fork this repository and contribute by submitting pull requests
