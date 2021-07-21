import { Component, OnInit } from '@angular/core';
import { IAccountHolder } from '../interfaces/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountHolders: IAccountHolder[] = [];

  constructor(private accountHolderService: AccountHolderService) { }

  ngOnInit() {
    this.getAccountHolders();
  }

  getAccountHolders(): void {
    this.accountHolderService.getAccountHolders()
      .subscribe(accountHolders => this.accountHolders = accountHolders.slice(0, 4));
  }
}
