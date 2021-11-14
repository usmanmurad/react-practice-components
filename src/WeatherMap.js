import {useSelector, useDispatch} from "react-redux";
import {addCityData} from "./features/weathergraph/weatherSlice";
import {useState} from "react";
import {Line} from 'react-chartjs-2';
import axios from "axios";


function LineGraph(props) {

    const tempState = {
        labels: props.times,
        datasets: [
            {
                label:props.graphLabel,
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgb(192,75,122)',
                borderColor: 'rgba(0,0,0,0.36)',
                borderWidth: 2,
                data: props.data
            }
        ]
    }

    return(
        <Line
          data={tempState}
          options={{
            title:{
              display:true,
              text:"",
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    )

}


function WeatherGraph() {
    const data = useSelector( (state => state.weatherGraph.data))
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState('')


    function addData(){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid=c84478cb5b8be0d9cde89556a0492ee2')
            .then((response) =>{
                dispatch(addCityData(response.data))
            }, (error) => {
                console.log(error)
            })
    }


    var graphs = []
    var cityData;


    for(cityData in data){

        const city = data[cityData].city.name
        const list = data[cityData].list
        graphs.push(<h1>{city}</h1>)
        var tempratures = []
        var pressues = []
        var humidities = []
        var times = []
        var listItem;


        for(listItem in list){
            tempratures.push(list[listItem]['main']['temp'])
            pressues.push(list[listItem]['main']['pressure'])
            humidities.push(list[listItem]['main']['humidity'])
            times.push(list[listItem]['dt_txt'])
        }

        graphs.push(<LineGraph class='col-md-4' times={times} graphLabel={city+' Temperature'} data={tempratures}/>)

        graphs.push(<LineGraph class='col-md-4' times={times} graphLabel={city+' Pressure'} data={pressues}/>)

        graphs.push(<LineGraph class='col-md-4' times={times} graphLabel={city+' Humidity'} data={humidities}/>)
    }


    return(
        <div>
            <input value={cityName} onChange={event => setCityName(event.target.value)}/>
            <button onClick={addData}>Search</button>
            {graphs}
        </div>
    )
}

export default WeatherGraph