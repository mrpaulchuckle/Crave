import { Component, OnInit } from '@angular/core';
import { IAccountHolder } from '../interfaces/account-holder';
import { AccountHolderService } from '../services/account-holder.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.css']
})

export class AccountHoldersComponent implements OnInit {
  accountHolders: IAccountHolder[] = [];

  constructor(private accountHolderService: AccountHolderService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAccountHolders();
  }

  getAccountHolders(): void {
    this.accountHolderService.getAccountHolders()
      .subscribe(accountHolders => this.accountHolders = accountHolders);
  }

  add(iban: string, name: string): void {
    name = name.trim();
    iban = iban.trim();

    if (!name || !iban)
    { return; }

    this.accountHolderService.addAccountHolder({ name, iban } as IAccountHolder)
      .subscribe(accountHolder => {
        this.accountHolders.push(accountHolder);
      });
  }

  delete(accountHolder: IAccountHolder): void {
    this.accountHolders = this.accountHolders.filter(h => h !== accountHolder);
    this.accountHolderService.deleteAccountHolder(accountHolder.id).subscribe();
  }

}
