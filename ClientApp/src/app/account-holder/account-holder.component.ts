import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IAccountHolder } from '../interfaces/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css']
})

export class AccountHolderComponent implements OnInit {
  accountHolder: IAccountHolder | undefined;

  constructor(
    private route: ActivatedRoute,
    private accountHolderService: AccountHolderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAccountHolder();
  }

  getAccountHolder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountHolderService.getAccountHolder(id)
      .subscribe(accountHolder => this.accountHolder = accountHolder);
  }

  updateAccountHolder() {
    this.accountHolderService.updateAccountHolder(this.accountHolder)
      .subscribe(accountHolder => {
        this.router.navigate(['/account-holders']);
      });
  }

  deleteAccountHolder() {
    this.accountHolderService.deleteAccountHolder(this.accountHolder.id)
      .subscribe(accountHolder => {
        this.router.navigate(['/account-holders']);
      });
  }
}
