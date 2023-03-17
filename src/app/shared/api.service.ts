import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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



  constructor(private http: HttpClient) { }

  isLoggedIn=new BehaviorSubject<boolean>(false)

  saveurl="http://localhost:3000/register"
  loginurl="http://localhost:3000/login"

  users(data: any){
    this.isLoggedIn.next(true);
  
    return this.http.post(this.loginurl,data)
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
