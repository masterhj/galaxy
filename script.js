// Simulated function to update availability dynamically (for demonstration)
function updateAvailability() {
    const bedsCityGeneral = Math.floor(Math.random() * 10);
    const medsCityGeneral = Math.floor(Math.random() * 10);

    const bedsEastside = Math.floor(Math.random() * 10);
    const medsEastside = Math.floor(Math.random() * 10);

    document.getElementById('beds-city-general').textContent = bedsCityGeneral;
    document.getElementById('meds-city-general').textContent = medsCityGeneral;

    document.getElementById('beds-eastside').textContent = bedsEastside;
    document.getElementById('meds-eastside').textContent = medsEastside;
}

// Update every 5 seconds for demo purposes
setInterval(updateAvailability, 5000);
