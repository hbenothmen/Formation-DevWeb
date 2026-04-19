import { Component, Input, OnInit, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true, // Recommandé en Angular moderne
  template: `<div> <h1> Composant Enfant </h1> <p>Valeur reçue : {{data}} </p></div>`,
})
export class Lifecycle implements OnInit, OnChanges, OnDestroy {
  @Input() data: number = 0;

  constructor() {
    console.log('1. Constructor : Le composant est créé');
  }
// is an Angular lifecycle hook that executes whenever any data-bound input property (@Input) of a component or directive changes
  //a SimpleChanges object maps each changed input property name to a SimpleChange object
ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges : La donnée a changé', changes['data'].currentValue);
  }
//The ngOnInit method runs after Angular has initialized all the components inputs with their initial values
  ngOnInit() {
    console.log("3. ngOnInit : Le composant est initialisé");
  }
//ngOnDestroy is an Angular lifecycle hook used to perform cleanup just before a component, directive, pipe, or service is destroyed
  ngOnDestroy() {
    console.log("4. ngOnDestroy : Le composant va être supprimé");
  }
}