import { Component, onMount, createSignal, Index } from 'solid-js'
import { getStops } from '../api'
import { BusStop } from '../types'

import './stops.css'

const Stops: Component = () => {
  const [busStops, setBusStops] = createSignal()

  onMount(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const stops = await getStops(position)
          setBusStops(stops)
        }
      )
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  })

  return (
    <ul>
      <Index each={busStops() as BusStop[]}>
        {(stop, index: number) => <li>{stop().name}</li>}
      </Index>
    </ul>
  )
}

export default Stops
