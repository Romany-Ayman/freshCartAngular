import { HttpInterceptorFn } from '@angular/common/http';
import { PLATFORM_ID, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  let _PLATFORM_ID = inject(PLATFORM_ID);
  
  const _ToastrService=inject(ToastrService)
 
  return next(req).pipe(catchError((err)=>{
    console.log('interceptor',err.error.message)

    _ToastrService.error(err.error.message,'errrror')

    return throwError(()=>err )
  }))
};
