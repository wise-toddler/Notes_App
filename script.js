// Function to populate notebook options in select tag
function populateNotebookOptions() {
    const notebookSelect = document.getElementById('notebook-select');
    const notebookList = JSON.parse(localStorage.getItem('notebooks')) || [];
    
    // Clear existing options
    notebookSelect.innerHTML = '<option value="unclassified" selected>Unclassified</option>';

    // Add options for each notebook
    notebookList.forEach(notebook => {
        const option = document.createElement('option');
        option.value = notebook.id;
        option.textContent = notebook.title;
        notebookSelect.appendChild(option);
    });
}

// Call the function to populate notebook options initially
populateNotebookOptions();

// Add event listener for notebook creation button
document.getElementById('create-notebook-btn').addEventListener('click', function() {
    const notebookTitle = prompt('Enter notebook title:');
    if (notebookTitle) {
        // Create a new notebook object
        const newNotebook = {
            id: Date.now(), // Unique ID for the notebook
            title: notebookTitle,
            notes: [] // Array to store notes within the notebook
        };

        // Retrieve existing notebooks from local storage or create an empty array
        const notebooks = JSON.parse(localStorage.getItem('notebooks')) || [];

        // Add the new notebook to the array
        notebooks.push(newNotebook);

        // Update local storage with the updated notebooks array
        localStorage.setItem('notebooks', JSON.stringify(notebooks));

        // Re-populate notebook options in select tag
        populateNotebookOptions();
    }
});
