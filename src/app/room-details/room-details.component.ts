import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number;
  room: Room;

  constructor(private route: ActivatedRoute, private router: Router, 
      private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
    .subscribe(data => {
      console.log(data);
      this.room = data;
    },
    error => console.error(error));
  }

  list() {
    this.router.navigate(['rooms']);
  }

}
