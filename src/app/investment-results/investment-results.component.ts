import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // This method is used to get the results from the service.
  // get results() {
  //   return this.investmentService.resultData;
  // }

  // Alternative way to get results, as a readonly property. Also, this way, the results are not recalculated on every change detection cycle.
  results = this.investmentService.resultData.asReadonly();
}
