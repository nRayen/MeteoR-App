import React from 'react'
import ClearDaySVG from './svg/weather/day/ClearDaySVG'
import ClearNightSVG from './svg/weather/night/ClearNightSVG'
import PartlyCloudyDaySVG from './svg/weather/day/PartlyCloudyDaySVG'
import PartlyCloudyNightSVG from './svg/weather/night/PartlyCloudyNightSVG'
import CloudySVG from './svg/weather/CloudySVG'
import OvercastSVG from './svg/weather/OvercastSVG'
import RainSVG from './svg/weather/RainSVG'
import PartlyCloudDayRainSVG from './svg/weather/day/PartlyCloudDayRainSVG'
import PartlyCloudyNightRainSVG from './svg/weather/night/PartlyCloudyNightRainSVG'
import ThunderstormSVG from './svg/weather/ThunderstormSVG'
import SnowSVG from './svg/weather/SnowSVG'
import FogSVG from './svg/weather/FogSVG'

const WeatherIcon = ({code}) => {

    console.log(code)

    switch (code) {
        case "01d" : // Clear
        console.log("test")
            return <ClearDaySVG className="sky-icon"/>
        case "01n" :
            return <ClearNightSVG className="sky-icon"/>

        case "02d" : // Partly Cloudy
            return <PartlyCloudyDaySVG className="sky-icon"/>
        case "02n" :
            return <PartlyCloudyNightSVG className="sky-icon"/>

        case "03d" : // Cloud
            return <CloudySVG className="sky-icon"/>
        case "03n" :
            return <CloudySVG className="sky-icon"/>

        case "04d" : // Full Cloud
            return <OvercastSVG className="sky-icon"/>
        case "04n" :
            return <OvercastSVG className="sky-icon"/>

        case "09d" : // Full rain
            return <RainSVG className="sky-icon"/>
        case "09n" :
            return <RainSVG className="sky-icon"/>

        case "10d" : // Rain
            return <PartlyCloudDayRainSVG className="sky-icon"/>
        case "10n" :
            return <PartlyCloudyNightRainSVG className="sky-icon"/>

        case "11d" : // Thunderstorm
            return <ThunderstormSVG className="sky-icon"/>
        case "11n" :
            return <ThunderstormSVG className="sky-icon"/>

        case "13d" : // Snow
            return <SnowSVG className="sky-icon"/>
        case "13n" :
            return <SnowSVG className="sky-icon"/>

        case "50d" : // Mist
            return <FogSVG className="sky-icon"/>
        case "50n" :
            return <FogSVG className="sky-icon"/>
        default :
            return <p>{code}</p>
    }
}

export default WeatherIcon