document.getElementById("cooking-time-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const originalTime = parseFloat(document.getElementById("original-time").value);
    const originalWattage = parseInt(document.getElementById("original-wattage").value);
    const newWattage = parseInt(document.getElementById("new-wattage").value);

    const newTime = (originalTime * originalWattage) / newWattage;
    const minutes = Math.floor(newTime);
    const seconds = Math.round((newTime - minutes) * 60);

    document.getElementById("result").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});