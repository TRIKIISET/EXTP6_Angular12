import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit {

  livres:Livre[]=[];

  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    this.onAfficherAll();
  }

  onAfficher(categorie:string){
    this.livres = this.livreService.getLivresByCategorie(categorie);
  }
  onAfficherAll(){
    this.livres = this.livreService.getLivres();
  }

}
