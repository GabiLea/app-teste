import { TransactionResolverGuard } from './guards/transaction-resolver.guard';
import { TransactionsComponent } from './transactions/transactions.component';
import { StatementComponent } from './statement/statement.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'statement', component: StatementComponent },
  {
    path: 'newTransaction', component: TransactionsComponent,
    resolve: {
      transactionNav: TransactionResolverGuard
    }
  },
  {
    path: 'edit/:id', component: TransactionsComponent,
    resolve: {
      transactionNav: TransactionResolverGuard
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
