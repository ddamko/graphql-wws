import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from "apollo-angular";

import { Bull } from "../schema-types";
import { bullsQuery } from "./bulls.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-bulls',
  templateUrl: './bulls.component.html',
  styleUrls: ['./bulls.component.scss']
})
export class BullsComponent implements OnInit {
  public bulls: [Bull];
  private bullObs: ApolloQueryObservable<any>;
  private bullSub: Subscription;

  constructor(private apollo: Apollo) { }

  public ngOnInit(): void {

    this.bullObs = this.apollo.watchQuery({
      query: bullsQuery,
      variables: {
        breed: "HO",
        new_type: "#"
      }
    });

    this.bullSub = this.bullObs.subscribe( ({data, loading}) => {
      this.bulls = data.bulls
    });

  }

}
