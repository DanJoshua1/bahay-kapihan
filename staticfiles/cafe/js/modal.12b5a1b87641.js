document.addEventListener('DOMContentLoaded', function() {
    const modalElement = document.getElementById('itemDetailsModal');
    const modal = new bootstrap.Modal(modalElement);
    
    // Store the element that triggered the modal
    let triggerElement = null;
    
    modalElement.addEventListener('show.bs.modal', function() {
        // Store the current focused element
        triggerElement = document.activeElement;
    });
    
    modalElement.addEventListener('hidden.bs.modal', function() {
        // Clear modal content
        document.getElementById('itemImage').src = '';
        document.getElementById('itemDetailsModalLabel').textContent = '';
        document.getElementById('itemDescription').textContent = '';
        
        // Return focus to the trigger element
        if (triggerElement) {
            triggerElement.focus();
        }
    });
});