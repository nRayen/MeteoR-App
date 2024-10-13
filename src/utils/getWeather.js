export async function getWeatherr(city) {

    try {
        let res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=hours%2Cdays%2Ccurrent&key=${process.env.NEXT_PUBLIC_VISUALCROSSING_API_KEY}&contentType=json&lang=fr`)

        if (!res.ok) {
            throw new Error("Erreur : " + res.status)
        }

        let data = await res.json();
        return data

    } catch (error) {
        console.error(error.message)
    }
}