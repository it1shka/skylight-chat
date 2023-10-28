import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import { useState, useEffect } from 'react'
import { Map } from 'leaflet'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { locationState } from '../ChatView/state'

const MapView = () => {
  const [mapRef, setMapRef] = useState<Map | null>(null)
  const navigate = useNavigate()
  const setLocation = useSetRecoilState(locationState)

  useEffect(() => {
    if (!mapRef) return
    mapRef.addEventListener('click', event => {
      const {lat, lng} = event.latlng
      setLocation({lat, lng})
      navigate('/chat')
    })
    return () => { 
      mapRef.removeEventListener('click')
    }
  }, [mapRef, navigate, setLocation])

  return (
    <MapContainer center={[51.1079, 17.0385]} zoom={13} style={{
       width: '100%', 
       height: '100%', 
       overflow: 'hidden' 
    }} ref={setMapRef}>
      <ZoomControl position='topright'/>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapView