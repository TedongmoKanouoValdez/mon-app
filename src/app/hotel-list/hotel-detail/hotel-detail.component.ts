import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHotel } from '../hotel';
import { HotelListService } from '../hotel-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};

  constructor(
    private route: ActivatedRoute,

    private hotelservice: HotelListService
  ) {

  }

  ngOnInit(): void {
    const id: number = (this.route.snapshot.paramMap.get('id'), 10);

      this.hotelservice.getHotels().subscribe((hotels: IHotel[]) => {
        // this.hotel = hotels.find(hotel => hotel.hotelId === id);
        console.log('hotel :', this.hotel);
      });

  }


}
