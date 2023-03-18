import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataArray:any[]=[]
  data:any={
      Id:0,
      name:'',
      email:''
  }
  name:any



  constructor(private http: HttpClient, private router : Router) { }

  isLoggedIn=new BehaviorSubject<boolean>(false)

  // public userStatus: string = '';
  // public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

  // setUserStatus(userStatus: any): void {
  //   this.userStatus = userStatus;
  //   this.userStatusChanges.next(userStatus);
  // }

  saveurl="http://localhost:3000/register"
  loginurl="http://localhost:3000/login"

  users(data: any){
    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    this.isLoggedIn.next(true);
  
    return this.http.post(this.loginurl,data)
     //send a post request to the 
  //    this.http.post("loginurl", JSON.stringify(data), {headers: headers}).subscribe(res => {
  //     //set the token to localStorage
  //     localStorage.setItem("access_token", );
  //     this.setUserStatus(res["token"]);
  //     console.log(res["token"])
  //     this.router.navigate(["/dashboard"]);
  // });
  }
  
  saveUser(data: any){
    this.isLoggedIn.next(true);
    return this.http.post(this.saveurl,data)
  
  }

  addData(){
    this.data.Id=this.dataArray.length+1
    this.dataArray.push(({
      Id:this.data.Id,
      name:this.data.name,
      email:this.data.email}
      ));
    console.log(this.data,this.dataArray)
    this.data={
      Id:0,
      name:'',
      email:''
      }
  }
  
  editData(item:any){
    this.data=item

  
  }
  
  updateData(){
    const record=this.dataArray.find(m=>m.Id==this.data.Id)

    record.name=this.name;
  }
  
  removeData(id:any){
  for(let i=0; i<this.dataArray.length; i++){
    if(this.dataArray[i].Id ==id){
      this.dataArray.splice(i,1);
    }
  }
  
  


  }
}
