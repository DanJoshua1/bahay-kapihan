function showItemDetails(imageUrl, name, description) {
    const dialog = document.getElementById('itemDetailsModal');
    
    // Set content
    document.getElementById('itemImage').src = imageUrl;
    document.getElementById('itemDetailsModalLabel').textContent = name;
    document.getElementById('itemDescription').textContent = description;

    // Show dialog
    dialog.showModal();
}

function closeDialog() {
    const dialog = document.getElementById('itemDetailsModal');
    dialog.close();
}