export class Footer {
   copyright: string;
   poweredBy: string;
   company: string;
   year: Date = new Date();
   views: string;
   href: string;
   imageSrc: string;
   homePage: string;

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

  public getViews() {
    return this.views;
  }

  public setViews(view: string){
    this.views = view;
  }

  public getHref() {
    return this.href;
  }

  public setHref(href: string){
    this.href = href;
  }

  public getImageSrc(){
    this.imageSrc;
  }

  public setImageSrc(imageSrc: string){
    this.imageSrc = imageSrc;
  }

  public setHomePage(s: string){
    this.homePage = s;
  }

  public getHomePage(){
    return this.homePage;
  }
}
