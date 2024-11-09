  import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
  import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
  import { FormControl, Validators } from '@angular/forms';
  import { merge } from 'rxjs';
  import { PublicVarService } from '../publicvar.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-paginainicial',
    templateUrl: './paginainicial.component.html',
    styleUrls: ['./paginainicial.component.css']
  })
  export class PaginainicialComponent {

    

  }

