import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css']
})
export class SelectedLivreComponent implements OnInit {

  livre:Livre;
  constructor(private activatedRoute:ActivatedRoute,    
    private livreService:LivreService) { }

  ngOnInit(): void {
      let identif = this.activatedRoute.snapshot.params['id'];
      this.livre = this.livreService.getLivreById(identif);
  }

}
