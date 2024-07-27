$(document).ready(function() {
    // Fetches room data from the server and renders it in the table
    function fetchRooms() {
        $.ajax({
            url: 'http://localhost:3000/rooms', // API endpoint to fetch room data
            method: 'GET',
            success: function(data) {
                renderTable(data); // Renders table with fetched data
            },
            error: function(error) {
                console.error('Error fetching data', error); // Logs any errors during the fetch
            }
        });
    }

    // Renders the room data in the table
    function renderTable(data) {
        const tableBody = $('#datatablesSimple tbody'); // Selects the table body
        tableBody.empty(); // Clears existing table data
        data.forEach(row => {
            const tr = $('<tr></tr>'); // Creates a new table row
            tr.html(`
                <td>${row.room}</td> // Room number
                <td>${row.type}</td> // Room type
                <td class="${row.status}">${row.status.charAt(0).toUpperCase() + row.status.slice(1)}</td> // Room status with formatted text
                <td>${row.resident}</td> // Resident name
                <td>${row.amenities}</td> // Room amenities
            `);
            tableBody.append(tr); // Appends the row to the table body
        });
    }

    // Filters the table based on user input
    function filterTable() {
        const roomQuery = $('#roomFilter').val().toLowerCase(); // Gets the room filter value
        const statusQuery = $('#statusFilter').val().toLowerCase(); // Gets the status filter value

        $.ajax({
            url: 'http://localhost:3000/rooms', // API endpoint to fetch room data
            method: 'GET',
            success: function(data) {
                const filteredData = data.filter(row => {
                    const matchesRoom = row.room.toLowerCase().includes(roomQuery); // Checks if room matches filter
                    const matchesStatus = statusQuery === '' || row.status.toLowerCase() === statusQuery; // Checks if status matches filter
                    return matchesRoom && matchesStatus;
                });
                renderTable(filteredData); // Renders table with filtered data
            },
            error: function(error) {
                console.error('Error fetching data', error); // Logs any errors during the fetch
            }
        });
    }

    // Sorts the table based on the specified column index
    function sortTable(columnIndex) {
        $.ajax({
            url: 'http://localhost:3000/rooms', // API endpoint to fetch room data
            method: 'GET',
            success: function(data) {
                const sortedData = [...data].sort((a, b) => {
                    const aValue = Object.values(a)[columnIndex].toLowerCase(); // Gets the value for sorting from the specified column index
                    const bValue = Object.values(b)[columnIndex].toLowerCase();
                    return aValue.localeCompare(bValue); // Compares values to sort the data
                });
                renderTable(sortedData); // Renders table with sorted data
            },
            error: function(error) {
                console.error('Error fetching data', error); // Logs any errors during the fetch
            }
        });
    }

    // Event listener for room filter input
    $('#roomFilter').on('input', filterTable);

    // Event listener for status filter change
    $('#statusFilter').on('change', filterTable);

    // Event listeners for sorting table by different columns
    $('#sortRoomName').on('click', function() { sortTable(0); }); // Sorts by room name
    $('#sortRoomType').on('click', function() { sortTable(1); }); // Sorts by room type
    $('#sortStatus').on('click', function() { sortTable(2); }); // Sorts by room status

    // Initial fetch and render of room data
    fetchRooms();
});
