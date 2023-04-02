document.getElementById("cooking-time-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const originalTimeMinutes = parseFloat(document.getElementById("originalTimeMinutes").value) || 0;
    const originalTimeSeconds = parseFloat(document.getElementById("originalTimeSeconds").value) || 0;
    const originalTime = (originalTimeMinutes * 60) + originalTimeSeconds;
    const originalWattage = parseInt(document.getElementById("original-wattage").value);
    const newWattage = parseInt(document.getElementById("new-wattage").value);

    const newTime = (originalTime * originalWattage) / newWattage;
    const minutes = Math.floor(newTime / 60);
    const seconds = Math.round(newTime % 60);

    document.getElementById("result").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});