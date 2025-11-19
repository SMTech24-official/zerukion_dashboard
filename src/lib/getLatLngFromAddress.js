

async function getLatLngFromAddress(address) {
  const apiKey = "AIzaSyDz58Sak3dKLFdYMIeistoZzGfiI7BUAiE";

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`
  );

  const data = await response.json();

  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    return {
      lat: location.lat,
      lng: location.lng,
    };
  } else {
    throw new Error("Failed to fetch coordinates");
  }
}

export default getLatLngFromAddress;
