import { Injectable } from '@angular/core';
  
import { ToastrService } from 'ngx-toastr';
  
@Injectable()
export class NotificationService {
  
  constructor(private toastr: ToastrService) { 
    // toastr.options = {
    //     "closeButton": true,
    //     "debug": false,
    //     "newestOnTop": false,
    //     "progressBar": true,
    //     "positionClass": "toast-top-center",
    //     "preventDuplicates": false,
    //     "onclick": null,
    //     "showDuration": "300",
    //     "hideDuration": "1000",
    //     "timeOut": "1000",
    //     "extendedTimeOut": "1000",
    //     "showEasing": "swing",
    //     "hideEasing": "linear",
    //     "showMethod": "fadeIn",
    //     "hideMethod": "fadeOut"
    //   }
  }
  
  showSuccess(message: string, title: string){
    return  this.toastr.success(message, title, {
      timeOut: 3000
    })
  }
  
  showError(message: string, title: string){
      this.toastr.error(message, title)
  }
  
  showInfo(message: string, title: string){
    console.log("in sevice")
      this.toastr.info(message, title)
  }
  
  showWarning(message: string, title: string){
      this.toastr.warning(message, title)
  }

  showLogOut(message: string, title: string){
    this.toastr.info(message, title)
}
  
}