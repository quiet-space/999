import axios from "axios";
import { useEffect, useState } from "react";
import { objectToQuery } from "../../common/common";

const Weather = () => {
    const publicWeatherAPI = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"

    const [today, setToday] = useState('')
    const date = new Date()

    const [teams, setTeams] = useState({})


    const getToday = () => {
        const date= new Date()
        const year = date.getFullYear()
        let month = `${date.getMonth() + 1}`
        const day = date.getDate()

        setToday(year + (month.length < 2 ? 0 + month : month) + day)
    }


    const getWeather = () => {
        const query : any = objectToQuery({
            serviceKey: process.env.REACT_APP_PUBLIC_API_KEY_ENCODED,
            numOfRows: 10,
            pageNo: 1,
            base_date: '20240101',
            base_time: '0600',
            nx: 55,
            ny: 127
        })

        // 20241030 기준 serviceKey 기상청 동기화 이전이라 호출 불가 
            // axios.get(publicWeatherAPI + `${query}`)
            // .then(res => {
            // })
        
        return 
    }

    const getTeam = async () => {
        const proxyUrl : (string) = process.env.REACT_APP_PROXY_SERVER_URL || ''

        const map  = await axios.get(proxyUrl + '/teams')
                .then(({data}) => {
                    let map = {}
                    data.forEach((team : Array<string>) => {
                        map = {...map, [team[0]]: team}
                    })
                    return map
                })   
                
                setTeams(map)

                console.log(teams)

    }

useEffect(() => {
    Promise.all([getToday(), getTeam()])
    .then(() => {
        getWeather()    
    })
}, [])

    return <div>


Weather

    </div>
}

export default Weather;