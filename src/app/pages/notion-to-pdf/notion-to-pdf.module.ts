import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotionToPdfComponent } from './component/notion-to-pdf.component';
import { NotionToPdfRoutingModule } from './notion-to-pdf-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [NotionToPdfComponent],
    imports: [
        CommonModule,
        NotionToPdfRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
    ],
})
export class NotionToPdfModule {}
