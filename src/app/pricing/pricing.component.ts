import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.sass']
})
export class PricingComponent {

  public plans = [
    {
      id: 'free',
      name: 'free',
      price: 0,
      features: [
        'up to 2 users',
        'e-mail support',
        'limited statistics',
      ],
    },
    {
      id: 'pro',
      name: 'pro',
      price: 19,
      features: [
        'up to 10 users',
        'phone support',
        'sync projects',
        'statistics',
        'export',
      ],
    },
    {
      id: 'team',
      name: 'team',
      price: 49,
      features: [
        'unlimited users',
        'phone support',
        'sync projects',
        'statistics',
        'export',
      ],
    },
  ];
  public selectedPlanId = 'free';

  public selectPlan(plan_id: string) {
    // TODO: verify this is a valid plan
    this.selectedPlanId = plan_id;
  }

  public purchase() {
    console.log('Buying plan', this.selectedPlanId);
  }
}
