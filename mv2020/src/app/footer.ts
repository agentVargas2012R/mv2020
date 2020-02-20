export class Footer {
  private copyright: string;
  private poweredBy: string;
  private company: string;

  public setCopyright(copyright: string){
    this.copyright = copyright;
  }

  public setPoweredBy(poweredBy: string){
    this.poweredBy = poweredBy;
  }

  public setCompany(company: string){
    this.company = company;
  }

  public getCopyright() {
    return this.copyright;
  }

  public getPoweredBy() {
    return this.poweredBy;
  }

  public getCompany() {
    return this.company;
  }
}