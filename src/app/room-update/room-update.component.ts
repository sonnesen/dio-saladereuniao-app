import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  id: number;
  room: Room;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService) { 

  }

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

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
    .subscribe(data => console.log(data), error => console.error(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

}
