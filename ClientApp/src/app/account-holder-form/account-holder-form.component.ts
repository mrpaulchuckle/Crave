import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountHolder, IAccountHolder } from '../interfaces/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})

export class AccountHolderFormComponent {
  accountHolder: IAccountHolder | undefined;

  constructor(
    private accountHolderService: AccountHolderService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.accountHolder = new AccountHolder();
  }

  onSubmit() {
    this.accountHolderService.addAccountHolder(this.accountHolder)
      .subscribe(accountHolder => {
        this.router.navigate(['/account-holder/' + accountHolder.id]);
      });
  }
}
