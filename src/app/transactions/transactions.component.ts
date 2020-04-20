import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ModalService } from '../shared/components/modal/modal.service';
import { statement } from '../statement/statement';
import { StatementService } from '../statement/statement.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  state$: Observable<statement>;
  
  constructor(private fb: FormBuilder,
    private service: StatementService,
    private location: Location,
    private modal: ModalService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    const transaction = this.route.snapshot.data['transactionNav'];

    this.form = this.fb.group({
      id: [transaction.id, []],
      valor: [transaction.valor, [Validators.required, Validators.minLength(1)]],
      tipoOperacao: [transaction.tipoOperacao, [Validators.required]],
      descricao: [transaction.descricao, [Validators.required, Validators.minLength(2)]]
    });

  }

  onSubmit() {
    this.submitted = true;

    let msgSuccess = 'Transação realizada com sucesso.'
    let msgError = 'Erro ao realizar a transação.'

    if (this.form.value.id) {
      msgSuccess = 'Transação atualizada com sucesso.'
      msgError = 'Erro ao atualizar a transação.'
    }

    console.log(this.form.value);
    this.service.save(this.form.value).subscribe(
      success => {
        this.modal.showAlertSuccess(msgSuccess);

        this.location.back();
      },
      error => this.modal.showAlertDanger(msgError)
    )


  }

  onCancel() {
    this.submitted = false;
    this.form.reset();

  }

}
