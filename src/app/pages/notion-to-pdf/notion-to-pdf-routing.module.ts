import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotionToPdfComponent } from './component/notion-to-pdf.component';

const routes: Routes = [
    {
        path: '',
        component: NotionToPdfComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotionToPdfRoutingModule {}
