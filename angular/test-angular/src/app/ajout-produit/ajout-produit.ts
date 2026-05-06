import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-produit',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './ajout-produit.html',
  styleUrl: './ajout-produit.css',
})
export class AjoutProduit implements OnInit {
  private fb=inject(FormBuilder);

productForm!:FormGroup;
  ngOnInit(): void {
  this.productForm=this.fb.group({
name: ['',[Validators.required, Validators.minLength(3)]],
price: ['',[Validators.required, Validators.min(1)]],
category: ['',[Validators.required]]
  })}
  onSubmit(){
if(this.productForm.valid){
  const product=this.productForm.value;
  console.log(product);
  this.productForm.reset();
}
  }
}
