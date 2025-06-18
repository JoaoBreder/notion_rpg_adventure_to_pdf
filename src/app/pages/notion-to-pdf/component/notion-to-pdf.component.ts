import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

// TODO: Lógica para inclusão de sumário
// TODO: Lógica para inclusão de logo
// TODO: Lógica para colocar se a aventura é oficial
@Component({
    selector: 'notion-to-pdf',
    templateUrl: './notion-to-pdf.component.html',
    styleUrls: ['./notion-to-pdf.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NotionToPdfComponent {
    notionToPdfForm: FormGroup;

    loading$ = new BehaviorSubject(false);

    constructor() {
        this.criarFormulario();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Métodos públicos
    // -----------------------------------------------------------------------------------------------------

    // TODO: Falta a lógica para geração do pdf e inclusão do arquivo da aventura
    gerarPdfAventura(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Métodos privados
    // -----------------------------------------------------------------------------------------------------

    private criarFormulario(): void {
        this.notionToPdfForm = new FormGroup({
            autor: new FormControl('', [Validators.required, Validators.minLength(4)]),
            revisao: new FormControl('', [Validators.required, Validators.minLength(4)]),
            sistema: new FormControl('', [Validators.required, Validators.minLength(4)]),
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Getters
    // -----------------------------------------------------------------------------------------------------

    get autorFormControl(): FormControl {
        return this.notionToPdfForm.get('autor') as FormControl;
    }

    get revisaoFormControl(): FormControl {
        return this.notionToPdfForm.get('revisao') as FormControl;
    }

    get sistemaFormControl(): FormControl {
        return this.notionToPdfForm.get('sistema') as FormControl;
    }

    get aventuraOficialFormControl(): FormControl {
        return this.notionToPdfForm.get('aventura_oficial') as FormControl;
    }
}
