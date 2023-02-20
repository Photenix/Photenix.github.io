import { ChartConfiguration } from "chart.js";

const labels = ['React', 'JS', 'CSS', 'HTML', 'SASS', 'Tailwind CSS', 'JQuery']

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Porcentaje de habilidad',
            data: [ 70, 60, 80, 75, 55, 40, 60],
        }
    ]
};

const config : ChartConfiguration = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: false,
      plugins: {
        title: {
          display: false,
          text: 'Que puede esperar de mi en'
        }
      }
    },
};

const configMovil : ChartConfiguration = {
  type: 'polarArea',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Que puede esperar de mi en'
      }
    }
  },
};


export { config, configMovil }