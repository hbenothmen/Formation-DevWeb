import { Component,signal,computed } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
count=signal(0);
incrementation(){
  this.count.update(v=>v+1);
  
}
decrementation(){
  this.count.update(v=>v-1);
  
  
}
parity = computed(()=>{
  return this.count()%2 === 0 ? 'pair':'impair';
    
});

}
