import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' 
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import {NewuserService} from '../newuser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  iscollapsed : boolean = true;
  num:number;
  val:number;
  name1 :string;
  email1 :string;
  phone1: number;
  password1:string;

  header=['email','name','password','phone','gender']
  numberdata=[];
  number:string;
  editname:string;
  editemail:string;
  editpassword:string;
  editphone:number;
  editdata=[]
  Name=[];
  Mail=[];
  Password=[];
  Phone=[];
  Gender=[];
  
  NAME:string;
  MAIL:string;
  PHONE:string;
  PASSWORD:string;

  payload=[]
  payload1=[]
  
  editid:string;
  constructor(private route: ActivatedRoute,private router: Router,private userservice:NewuserService) { } 
  
  ngOnInit(): void {
    
      this.userservice.getdata().subscribe((data:any) => {
        this.payload1 = data;
        console.log('Data requested ... ');
        console.log(this.payload1);
      });
 
  }

  onSubmit(name,email,password,phone,gender){
    
    this.Name.push(name);
    this.Mail.push(email);
    this.Password.push(password)
  this.Phone.push(phone);
  this.Gender.push(gender);
  }

 deleteItem(i){
   console.log(i);
   
    this.Name.splice(i,1);
    this.Mail.splice(i,1);
    this.Password.splice(i,1);
    this.Phone.splice(i,1);
    this.Gender.splice(i,1);
 }
  toggle(i){
    this.num=i;
    this.iscollapsed=!this.iscollapsed;
    this.name1=this.Name[i];
    this.email1=this.Mail[i];
    this.password1=this.Password[i];
    this.phone1=this.Phone[i];

  }

  onedit(name,email,password,phone,gender){
    
    console.log("edit");
  
  }

  reflect(){
    console.log(this.NAME);
    this.iscollapsed=!this.iscollapsed;
    this.Name[this.num]=this.NAME;
    this.Mail[this.num]=this.MAIL;
    this.Phone[this.num]=this.PHONE;
    this.Password[this.num]=this.PASSWORD;
  }
  fetchdata() {
    this.userservice.getdata().subscribe((data:any) => {
      this.payload1 = data;
      console.log('Data requested ... ');
      console.log(this.payload1);
    });
  }
  datatodb(name,email,password,phone){
    this.payload.push(name,email,password,phone);
    this.userservice.adddata(name,email,password,phone);
    this.fetchdata();
  }

  

  retrievebyid(j){
     this.val=j;
     this.iscollapsed=!this.iscollapsed;
     this.editdata=this.payload1[this.val];
     console.log(this.editdata["name"]);
     this.editname=this.editdata['name'];
     this.editemail=this.editdata['email'];
     this.editpassword=this.editdata['password'];
     this.editphone=this.editdata['phone'];
     this.editid=this.editdata['_id'];


  }

  editdatadb() {
    
    this.userservice.updatedata(this.editid,this.editname,this.editemail,this.editpassword,this.editphone)
    
    
  }

  deletedata(j) {
    this.retrievebyid(j);
    this.iscollapsed=!this.iscollapsed;
    this.number=this.editdata['_id'];
    this.userservice.deletedatadb(this.number).subscribe(()=>{
      console.log("delete of data is happening..");
      this.fetchdata();
    });
    }
  }
  


  
  



  

``