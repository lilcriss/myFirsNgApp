import { Component, OnInit } from '@angular/core';

import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  galery:any;

  page= 1;

  constructor(private http: HttpClient) { }

  loadPics(way='', nb=this.page){

    // Evalue la valeur de 'way'
    // Et définit des cas pour 'next' pour 'prev'
    switch(way){

      case 'next':
        this.page++;
        break;

      case 'prev':
        // Seulement si page > 0
        // Enlève 1 à page sinon rien
        this.page>1 ? this.page--: null;
        break;

      case'':
       this.page = nb;
       break
    }

    console.log('way & page:', way + '' +this.page)

    const URL ="https://picsum.photos/v2/list?page="+this.page+"&limit=12";
    this.http.get(URL)
    .subscribe(
      (data)=> {
console.log(this.galery);
this.galery = data;
      }
    )
  }

  ngOnInit(): void {
    this.loadPics();
    //this.http.get("https://picsum.photos/v2/list?page=2&limit=12").subscribe(
      //(data)=> {
//console.log(data);
//console.log(this.galery)
//this.galery = data;
      }
    //)
  //}

}
