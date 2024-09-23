function toggleLayout() {
    const flexboxStylesheet = document.getElementById('flex_style');
    const gridStylesheet = document.getElementById('grid_style');
    const toggleButton = document.querySelector('.toggle-btn');

    if (flexboxStylesheet.disabled) {
        flexboxStylesheet.disabled = false;
        gridStylesheet.disabled = true;
    } else {
        flexboxStylesheet.disabled = true;
        gridStylesheet.disabled = false;
    }
}