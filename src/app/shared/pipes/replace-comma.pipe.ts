import {Pipe, PipeTransform} from '@angular/core'

// les pipes personnalisées
@Pipe({
  name: 'replaceComma'
})

export class ReplaceComma implements PipeTransform{

  // elle permet dedire que si la valeur est , elle remplace par . sinon
  // elle retourne une chaine vide !! si la valeur n'est pas nulle g expression reguliere
  transform (value: string): string {
    if(!! value){
      return value.replace(/,/g, '.');
    }else{
      return '';
    }
  }
}


