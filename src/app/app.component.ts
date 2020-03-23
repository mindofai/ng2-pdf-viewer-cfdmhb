import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

      constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer) {
    }
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

ngOnInit(){
  this.getFile().subscribe(data =>{
   const file = new Blob([data], { type: 'application/pdf' });
          this.src = URL.createObjectURL(file);

          });
}

  getFile() {
    let endpoint = "https://sofico-edoc-dev-web-aae.azurewebsites.net/api/document/105/file?api-version=1.0&Content-Type=application/pdf";

    const httpOptions = {
        'responseType'  : 'arraybuffer' as 'json'
    };

    return this.http.get<any>(endpoint, httpOptions);

    }
}

