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
          return searchKey.value == prog.key;
      });
   }
}