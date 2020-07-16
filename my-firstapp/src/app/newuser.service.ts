import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {
  
  public payload=[];
  constructor(private http:HttpClient) {
    
  }

  getdata() {
    return this.http.get("http://localhost:9000/user/");
  }

    adddata(name:string,email:string,password:string,phone:string){
      
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      this.http.post("http://localhost:9000/user/", {name:name, email:email, password:password,phone:phone})
                .subscribe(() => {}, err => console.error(err)); 
      }

      updatedata(id:string,name:string,email:string,password:string,phone:number){
        console.log(id,name,email,password,phone);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.patch(`http://localhost:9000/user/update/${id}`,{name:name, email:email, password:password,phone:phone}).subscribe(()=>{

        },err => console.error(err));
      }


      deletedatadb(id) {
        return this.http.delete(`http://localhost:9000/user/${id}`);
      }
    
     




      
}
