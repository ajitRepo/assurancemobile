import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { VoitureComponent } from './voiture/voiture';
import { ChauffeurComponent } from './chauffeur/chauffeur';
@NgModule({
	declarations: [PopoverComponent,
    VoitureComponent,
    ChauffeurComponent,
    VoitureComponent],
	imports: [],
	exports: [PopoverComponent,
    VoitureComponent,
    ChauffeurComponent,
    VoitureComponent]
})
export class ComponentsModule {}
