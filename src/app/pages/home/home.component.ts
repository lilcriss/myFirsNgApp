import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  jsonImages = [
        {
      title: 'Lac',
      url:'image1.jpg',
      author: 'Bill gates'
    },
    {
      title: 'Sunrise',
      url:'image2.jpg',
      author: 'Lara Croft'
    },
    {
      title: 'Sea',
      url:'image3.jpg',
      author: 'James Bond'
    }
];


  randomIndex = Math.floor(Math.random()*this.arrayImages.length);

  sourceImage = this.arrayImages[this.randomIndex];

  console(str: string){
    console.log(str);
  };


  changeRandom(){

    this.randomIndex= Math.floor(Math.random()*this.arrayImages.length);

    this.console('randomIndex'+this.randomIndex);
  }

  valColor ='red';

  varObjet = {'font-size':'20px'}

  textPrimary = false;

  displayParag = true;

  displaySwitch = 1;

  inSwitch(){
    this.displaySwitch++;
    this.displaySwitch = this.displaySwitch>3 ? 1 : this.displaySwitch;
    //if (this.this.displaySwitch>3) {this.displaySwitch=1} else {this.displaySwitch = this.displaySwitch}

  }


  constructor() { }

  ngOnInit(): void {

   console.log('randomIndex:',this.randomIndex);

   console.log('sourceImage:',this.sourceImage);

   console.log('jsonImagesrandonTitle:',this.jsonImages[this.randomIndex].title);

  }

}
