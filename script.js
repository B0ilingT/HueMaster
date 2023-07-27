document.addEventListener("DOMContentLoaded", function () {
    const selectedColorDiv = document.getElementById('selected-color');
    const colorValueSpan = document.getElementById('color-value');
  
    updateColorPreview("#f0f0f0");
  
    // Function to convert RGB values to a hexadecimal color string
    function rgbToHex(r, g, b) {
      const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    // Function to update the color preview div with the selected color
    function updateColorPreview(color) {
      selectedColorDiv.style.backgroundColor = color;
      colorValueSpan.textContent = color; // Update the color value span with the selected color
    }
  
    // Function to handle the EyeDropper button click event
    async function handleEyeDropperClick() {
      try {
        const eyeDropper = new EyeDropper();
        const selectedColor = await eyeDropper.open();
        const r = parseInt(selectedColor.sRGBHex.substr(1, 2), 16);
        const g = parseInt(selectedColor.sRGBHex.substr(3, 2), 16);
        const b = parseInt(selectedColor.sRGBHex.substr(5, 2), 16);
        const hexColor = rgbToHex(r, g, b);
        updateColorPreview(hexColor);
        console.log(hexColor);
      } catch (err) {
        console.log('Color selection cancelled');
      }
    }
  
    // Event listener for the EyeDropper button click
    const openEyeDropperBtn = document.getElementById('open-eye-dropper');
    openEyeDropperBtn.addEventListener('click', handleEyeDropperClick);
  });
  