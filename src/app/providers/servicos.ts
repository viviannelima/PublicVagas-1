import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicosProvider {
  
  public endereco = "http://localhost/talentsweb/api/public/api/";
  
  constructor(public http: Http) 
  {}

}