export interface IAccountHolder {
  id: number;
  name: string;
  iban: string;
}

export class AccountHolder implements IAccountHolder {

  constructor(
    public id: number = null,
    public name: string = "",
    public iban: string = ""
  ) { }
}

