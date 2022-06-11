export class ArtEntityDTO {
  name: string;
  price: number;
  author: string;
  owner: string;
  description: string;
  nasaAssetId: number;
  //pictureUri: string; //todo

  public constructor() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.nasaAssetId = 0; 
    this.author = '';
    this.owner = '';
  } 
}
