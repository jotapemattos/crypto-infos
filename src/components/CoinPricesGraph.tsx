import axios from "axios"
import { HistoricalChart } from "../services/api"
import { useEffect, useState } from "react"
import { chartDays } from "../utils/chartDays"
import { CategoryScale, Chart as ChartJS } from 'chart.js/auto'
import Chart from 'chart.js/auto';
import { Line }            from 'react-chartjs-2'

Chart.register(CategoryScale);

interface ParametersProps {
  coin: string,
  currency: string
}

const CoinPricesGraph = ({coin, currency}: ParametersProps) => {
  const [historicData, setHistoricData] = useState <Array<Array<number>>>()
  const [days, setDays] = useState(1)

  const fetchGraphic = async () => {
    await axios.get(HistoricalChart(coin, days, currency))
    .then((response) => setHistoricData(response.data.prices))
  }

  useEffect(() => {
    fetchGraphic()
  }, [currency, days])

  return (
    <div className="flex flex-col min-w-full w-full min-h-full h-full">
      <span className="w-full h-[85%]">
        <Line
          data={{
            labels: historicData?.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData?.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#25aee4",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      </span>
      <span className="text-white w-full h-[15%] flex items-center justify-around">
        {chartDays.map((day) => (
          <button
            className="bg-blue-500/30 w-72 py-2 px-4 rounded-xl"
            key={day.value}
            onClick={() => setDays(day.value)}
          >
            {day.label}
          </button>
        ))}
      </span>
    </div>
  )
}

export default CoinPricesGraph