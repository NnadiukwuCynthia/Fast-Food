import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        zoom={8}
        center={{ lat: -34.397, lng: 150.644 }}
      >
        {/* Child components, markers, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map