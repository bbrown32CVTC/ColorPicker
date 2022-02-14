/*
**********
Script is designed to get the RGB data and change
it to PYBL data. It then will input the data in labels
after validating it matches the requirements. Gives
the customer the ability to refresh the page.
*/

// Event listener for the submit button contains the logic for converting RGB to PYBL
document.querySelector("#RGBForm").addEventListener("submit", function(event) {
  
  var red = Number(document.querySelector("#red").value);
  var green = Number(document.querySelector("#green").value);
  var blue = Number(document.querySelector("#blue").value);
  
  // Validates only numbers between 0 and 1 were inputted
  if(red == '' || isNaN(red) || green == '' || isNaN(green) || blue == '' || isNaN(blue) ){
    alert("All fields require a number!");
  }
  
  else if (red < 0 || red > 1 || green < 0 || green > 1 || blue < 0 || blue > 1){
    alert("Please only select numbers between 0 and 1!");
  }
  
  else {
    
    // Calculates what PYBL will be from RGB values submitted
    var totalRGB = (red + green + blue);
    var rho = (red / totalRGB).toFixed(2);
    var gamma = (green / totalRGB).toFixed(2);
    var beta = (blue / totalRGB).toFixed(2);
    var luminance = Math.max(rho, gamma, beta);
    
    // Displays the PYBL labels, square, and adds the data to labels
    document.querySelector("#Conversion").style.display = "block";
    document.querySelector("#pyblSquare").style.display = "block";
    document.querySelector("#rho").innerHTML += (" " + rho);
    document.querySelector("#gamma").innerHTML += (" " + gamma);
    document.querySelector("#beta").innerHTML += (" " + beta);
    document.querySelector("#luminance").innerHTML += (" " + luminance);
    
    // Calculates the RGB color and makes it the color of the square
    document.querySelector("#pyblSquare").style.backgroundColor = 'rgb(' + (red * 255) + ',' + (green * 255) + ',' + (blue * 255) + ')';
    
  }
  
  // Stops the form from getting refreshed by the browser
  event.preventDefault();
}, false)
