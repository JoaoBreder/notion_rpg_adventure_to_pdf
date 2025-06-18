import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'notion-to-pdf',
        loadChildren: () => import('./pages/notion-to-pdf/notion-to-pdf.module').then((m) => m.NotionToPdfModule),
    },

    { path: '**', pathMatch: 'full', redirectTo: 'notion-to-pdf' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
