import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grpComp'
})
export class GrpCompPipe implements PipeTransform {

  transform(tabC: any,  index: string, search: string ): unknown {
    const  tab = [];
    if (search.length === 0){
      return tabC;
    }
    tabC.filter((elmt: any) => {
    for (const c of elmt[index]){
      console.log(c.libelle);
      if ( JSON.stringify(c).toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        tab.push(elmt);
      }
    }
     });
    return tab;
  }

}
