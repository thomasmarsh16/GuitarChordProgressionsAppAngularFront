import { Pipe, PipeTransform } from '@angular/core';
import { chordProgression } from '../chord-data/data-interfaces';
@Pipe({
  name: 'filterKey'
})
export class FilterKey implements PipeTransform {
   transform(items: chordProgression[], searchKey: any ): any[] 
   {
      if(!items) return [];
      if(!searchKey) return items;
      
      return items.filter( prog => 
      {  
         if ( searchKey.value )
         {
            return searchKey.value == prog.key;
         }
         else
         {
            return searchKey == prog.key;
         }
          
      });
   }
}

@Pipe({
   name: 'filterGenre'
 })
 export class FilterGenre implements PipeTransform {
    transform(items: chordProgression[], searchGenre: any ): any[] 
    {
       if(!items) return [];
       if(!searchGenre) return items;
       
       return items.filter( prog => 
       {
          if ( searchGenre.value )
          {
            return searchGenre.value == prog.genre;
          }
          else
          {
            return searchGenre == prog.genre;
          }
       });
    }
 }