import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component  {
 
  @Input() name:string;
  @Input() email:string;
  @Input() password:string;
  @Input() phone:number;

  @Output() newname = new EventEmitter();
  @Output() newemail = new EventEmitter();
  @Output() newpassword = new EventEmitter();
  @Output() newphone = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.name);
    this.newname.emit(this.name);
    this.newemail.emit(this.email);
    this.newpassword.emit(this.password);
    this.newphone.emit(this.phone);
  }

}
