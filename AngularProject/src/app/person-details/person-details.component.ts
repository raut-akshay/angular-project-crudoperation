import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { CrudpostService } from '../crudpost.service';
import { CrudupdateService } from '../crudupdate.service';
import { CruddeleteService } from '../cruddelete.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  public Name;
  id:string;
  public Age;
  public Gender;
  public Mobile;
  flag:boolean= false;
  constructor(private data:CrudserviceService, private item:CrudpostService, private update:CrudupdateService, private del:CruddeleteService) { }
  public info=[];

  ngOnInit() {
    this.data.getpersondata().subscribe(ak=>{
      this.info=ak;
      console.log(this.info);
    });
    
  }

  addperson(){
    let data = {'Name': this.Name, 'Age':this.Age, 'Gender': this.Gender, 'Mobileno':this.Mobile};
    if(data.Name && data.Age && data.Gender && data.Mobileno){
        this.item.addperson(data).subscribe(Response=> {
          console.log("Record inserted...");
          this.data.getpersondata().subscribe(ak=>this.info=ak);
          console.log(this.info);
        });
    } else {
      console.log("Plese insert data.");
    }
  } 

  updatePerson(){
    let data = {'_id': this.id, 'Name': this.Name, 'Gender': this.Gender, 'Age':this.Age, 'Mobileno':this.Mobile};
    this.update.putperson(data).subscribe(Response=>{
      console.log("Record Updated...");
      this.flag=false;  
      this.data.getpersondata().subscribe(ak=>this.info=ak);
    });
  }
  putperson(data){
   this.flag = true;
   this.id = data._id;
    this.Name=data.Name;
    this.Age=data.Age;
    this.Gender=data.Gender;
    this.Mobile=data.Mobileno;
  }
  deleteperson(id){
    // console.log(id);
    this.del.deleteperson({'id': id}).subscribe(Response=>{ 
      console.log("Record Deleted");
      this.data.getpersondata().subscribe(ak=>this.info=ak);
    });
   }
}
