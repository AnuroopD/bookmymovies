import { MaterialModule } from './../../shared/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './containers/admin/admin.component';
import { MatTabsModule } from '@angular/material';
import { AddTheaterComponent } from './components/add-theater/add-theater.component';
import { AdminService } from './services/admin.service';
import { ChangeShowComponent } from './components/change-show/change-show.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminComponent, AddTheaterComponent, ChangeShowComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  providers: [AdminService]
})
export class AdminModule {}
