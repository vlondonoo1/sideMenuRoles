import { FelixProvider } from '../providers/felix/felix';
import { LaguerthaProvider } from '../providers/laguertha/laguertha';

export const TYPE_OF_APP = 0;

export function ChooseProvider(){
  let vari = {
    1 :  () => new FelixProvider(),
    0 :  () => new LaguerthaProvider()
  }
  return vari[TYPE_OF_APP];
}