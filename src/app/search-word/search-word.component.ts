import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {

  onSubmitForm = this.formBuilder.group({
    searchWord: '',
    searchWordLanguage: 'en-gb'
  });

  private baseUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.baseUrl = 'https://od-api.oxforddictionaries.com/api/v2/';
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    let searchWordLanguage = this.onSubmitForm.value.searchWordLanguage;
    let searchWord = this.onSubmitForm.value.searchWord;

    const customHeaders = new HttpHeaders();

    this.http.get<string>('https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/hello', { headers: customHeaders}).subscribe(result => {
    console.log(result);

    }, error => console.error(error));
    console.log(this.onSubmitForm.value.searchWordLanguage);
    this.baseUrl = "1";

  }

}
