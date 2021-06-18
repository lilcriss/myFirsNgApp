import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstname ='';
  lastname ='';
  email = '';
  message = '';
  myVar= '';

  constructor(private http:HttpClient, private router:Router) { }

  onSubmit(formData: any){

    let score = 0;
    let max = 4;
    let errorMessage ='';
    

    // valider la longueur de firstname
    formData.firstname.length > 2 ? score++ : errorMessage +='Firstname must be longer tnah 2 car\n';
    console.log('score:', score);

    // valider la longueur de lastname
    formData.lastname.length > 2 ? score++ : errorMessage +='Lastname must be longer tnah 2 car\n';
    console.log('score:', score);

    // valider la longueur de email
    // formData.email.indexOf('@') > 1 ? score++ : errorMessage +='Email must contain an @\n';
    // console.log('score:', score);

    // valider la présence d'un point . dans l'email près l'@
    // formData.email.indexOf('.') > formData.email.indexOf('@')+2 ? score++ : errorMessage +='Email must contain a . after @\n';
    // console.log('score:', score);
    
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/.test(formData.email)){
      score++;
    }
    else{
        errorMessage += 'Email must be valid\n';
      }
  

    // valider la présence d'un point . au moins 3 caractères avant la fin de la chaine 
    formData.email.indexOf('.') < formData.email.length-2 ? score++ : errorMessage +='Email must contain a valid domain name\n';
    console.log('score:', score);

    let validation = score == max ? true: false;

    if(validation){

      console.log('Sending Data:',formData);

      const headers = new HttpHeaders()
      .set('Content-Type','application:x-www-form-urlencoded')

      this.http.post("https://httpbin.org/post",formData,{headers}).subscribe(
        (response) => {
          console.log('RETOUR PAR LE SERVEUR DISTANT YOYHOUHOU!!!',response);

       if(response){
         console.log('OK ON EST BON');
        //On redirige vers une autre page de l'app
         this.router.navigateByUrl('/about');

        // redirection JAVASCRIPT
        //window.location.href="https://www.msn.com/fr-fr/?ocid=mailsignout&pc=U591&AR=1";
          }
        }
      )
    } 

    else{
      alert('Error validating your form!!!\n' + errorMessage);
    }

 
  }

  ngOnInit(): void {
  }

}
