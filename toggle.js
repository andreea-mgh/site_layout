function toggleLayout() {
    const flexboxStylesheet = document.getElementById('flex_style');
    const gridStylesheet = document.getElementById('grid_style');
    const toggleButton = document.querySelector('.toggle-btn');
    const layoutTitle = document.querySelector('.layout-title');

    if (flexboxStylesheet.disabled) {
        flexboxStylesheet.disabled = false;
        gridStylesheet.disabled = true;
        layoutTitle.textContent = "Flexbox Layout page";
    } else {
        flexboxStylesheet.disabled = true;
        gridStylesheet.disabled = false;
        layoutTitle.textContent = "Grid Layout page";
    }
}