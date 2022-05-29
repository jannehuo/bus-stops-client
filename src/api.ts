import config from './config'
import { BusStop } from './types'

export const getStops = async (
  position: GeolocationPosition
): Promise<BusStop[]> => {
  const url = `${config.BUS_API_URL}/nearby/${position.coords.latitude}/${position.coords.longitude}/200`
  const stops = await fetch(url, { method: 'POST' })
  return stops.json()
}
