import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})

export class HotelListComponent implements OnInit {

  public title = 'listes hotels';

  // Tableau des hotels qui prends les parametres de l'interfaces créees
  public hotels: IHotel[] = []

  // fonction qui permet d'afficher le badge
  public showBadge: boolean = false;

  private _hotelFilter = 'mot';

  public filteredHotels: IHotel[] = [];

  public receiveRating!: string;
  public errMsg!: string;

  constructor(private hotelListService: HotelListService) {

  }

  // comment utiliser la methode qui implemente la classe HotelListComponent
  ngOnInit() {
    // permet de recuperer la methode du sevice pour afficher la liste des hotels
    this.hotelListService.getHotels().subscribe({
      next: hotels=> {
        this.hotels = hotels;
        this.filteredHotels = this.hotels;
      },
      error: err => this.errMsg = err
    });


    // initialise le filtre à mot
    this.hotelFilter = '';
  }

  // retourne la liste des hotels filtrés
  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    // si elle reçoit une nouvelle on possede au filtre des hotels au cas contraire on affiche la lsite de tous les hotels
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;

  }

  // elle permet de filtrer le nom des hotels si l'index est != de -1
  private filterHotels(criteria: string): IHotel[] {

    // elle transforme le critere de recherche en maj ou min
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }

  // Renvoie le message de la note
  public receiveRatingClicked(message: string): void {
    this.receiveRating = message;
  }

  public toggleIsNewBagde(): void {
    this.showBadge = !this.showBadge;
  }
}
