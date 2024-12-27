document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('.save-button');
    const resetButton = document.querySelector('.reset-button');

    saveButton.addEventListener('click', () => {
        alert('Changes saved successfully!');
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset settings to default?')) {
            alert('Settings have been reset to default.');
        }
    });
});
