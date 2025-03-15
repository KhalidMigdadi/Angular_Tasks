import { Component, OnInit } from '@angular/core'; //which is an Angular lifecycle hook that runs after the component is initialized
import { category, UrlServiceService } from '../Service/url-service.service'; // import from service.ts that i export it
//import { Category } from '';  // Import Category interface

@Component({ // decorator that tells Angular this is a component
  selector: 'app-category', // that represents this component in a template.
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {
  


  // how can i make inject for the service inside this comp? by constr
  constructor(private _url: UrlServiceService) { }
  // The UrlServiceService service is injected into the component using the constructor.





  // This method runs automatically when the component is initialized.
  ngOnInit() { // if i want to use ngOnInit i must implements OnInit
    this.getData(); // Calls this.getData() to fetch the categories as soon as the page loads.
  }




  // category: any; // container for the (data) from API

  category: category[] = [];  // Store fetched data


  getData() {
    // getCategories() the same method in the service and it makes an HTTP request to fetch category data.
    // getCategories() it didint immediately return data it returns an Observable. not actual data
    // Think of an Observable like a delivery service—it will bring the data later when it’s ready
    // subscribe() is like opening the door and waiting for the delivery. so Without subscribe(), the data won't be received.




    // subscribe() is used to listen to the Observable returned by getCategories().
    // data is the response received from the API.


    this._url.getCategories().subscribe((data) => { // getCategories => the method that observed  // sub is i want to sub by this method to use the data inside it 
      this.category = data;
    });
  }
}


// inside the comp we will use

// to make injection

// ngOnInit(); // the first one load

// constructor


// the function



//  It is recommended to use ngOnInit for fetching data, making API calls, and initializing component logic.
