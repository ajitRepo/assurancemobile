import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { Voiture } from './voiture/voiture';
import { Chauffeur } from './chauffeur/chauffeur';
@NgModule({
	declarations: [PopoverComponent,
    Chauffeur,
    Voiture],
	imports: [],
	exports: [PopoverComponent,
    Chauffeur,
    Voiture]
})
export class ComponentsModule {}
