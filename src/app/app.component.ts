import { Component } from '@angular/core';
import { Anomaly } from './anomaly';

const ANOMALIES: Anomaly[] = [
  { id: 11,
    timestamp: "01.08.2017 12:01",
	durationSeconds: 10,
	audioUrl: "http://localhost:8080/audio/anomaly_000011.wav",
	calculatedLabel: null,
    expertLabel: "Kammplatte defekt" },
  { id: 12,
    timestamp: "09.08.2017 23:23",
	durationSeconds: 5,
	audioUrl: "http://localhost:8080/audio/anomaly_000012.wav",
	calculatedLabel: null,
    expertLabel: "Antriebskettenspannung zu niedrig" }
];

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <table>
			   <tr *ngFor="let anomaly of anomalies">
			     <td>{{ anomaly.id }}</td>
				 <td>{{ anomaly.timestamp }}</td>
				 <td>{{ anomaly.durationSeconds }}</td>
			   </tr>
			 </table>
  `
})
export class AppComponent {
  name = 'Anomalies';
  anomalies = ANOMALIES;
}
