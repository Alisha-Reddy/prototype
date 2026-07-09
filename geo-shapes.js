// Vanilla-JS GeoJSON circle generator (no turf dependency).
// center: [lng, lat], radiusKm: number, points: polygon vertex count
function createGeoJSONCircle(center, radiusKm, points) {
  points = points || 64;
  const latitude = center[1];
  const longitude = center[0];
  const distanceX = radiusKm / (111.320 * Math.cos((latitude * Math.PI) / 180));
  const distanceY = radiusKm / 110.574;

  const ring = [];
  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI);
    ring.push([longitude + distanceX * Math.cos(theta), latitude + distanceY * Math.sin(theta)]);
  }
  ring.push(ring[0]);

  return {
    type: "Feature",
    properties: {},
    geometry: { type: "Polygon", coordinates: [ring] },
  };
}
