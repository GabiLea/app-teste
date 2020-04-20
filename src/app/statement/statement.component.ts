import { ModalService } from '../shared/components/modal/modal.service';
import { StatementService } from './statement.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { statement } from './statement';
import { Observable, empty, EMPTY } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  state$: Observable<statement[]>;
  deleteModalRef: BsModalRef;
  transactionSelected: statement;

  constructor(private service: StatementService,
    private modalService: BsModalService,
    private modal: ModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.state$ = this.service.list();

  }

  ngOnChanges() {
  }

  onRefresh() {
    this.state$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );

  }

  handleError() {
   this.modal.showAlertSuccess('Erro ao carregar extrato');
  }

  onEdit(id) {
    this.router.navigate(['edit', id]);
  }

  onDelete(transaction) {
    this.transactionSelected = transaction;

    const result$ = this.modal.showConfirm('Confirmacao', 'Tem certeza que deseja remover essa transação?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.delete(transaction.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.modal.showAlertDanger('Erro ao excluir a transação. Tente novamente mais tarde.');
      }
    );
  }

  onConfirmDelete() {
    this.service.delete(this.transactionSelected.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.modal.showAlertDanger('Erro ao excluir a transação. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
