import Chart, {ChartItem} from 'chart.js/auto';
import { config, configMovil } from '../component/config';


function exeChart() {
    try{
        const cv1 : HTMLCanvasElement = document.getElementsByTagName('canvas')[0]
        const cv2 : HTMLCanvasElement = document.getElementsByTagName('canvas')[1]
        const ctx : HTMLCanvasElement = cv1
        const ctxMovil : HTMLCanvasElement = cv2
        
        new Chart(ctx, config);
        new Chart(ctxMovil, configMovil );
    }
    catch(e){}
}

export { exeChart }