function volume_sphere(e) {
  e.preventDefault();
  const radiusInput = parseFloat(document.getElementById("radius").value);
  console.log(radiusInput);
  const vol = (4 / 3) * Math.PI * radiusInput ** 3;
  document.getElementById("volume").value = vol.toFixed(2);
  return false;
}

window.onload = function() {
  document.getElementById("MyForm").onsubmit = volume_sphere; // Bind the function to the form submit event
};
