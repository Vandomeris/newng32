import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FormSendComponent } from './pages/form-send/form-send.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { UiTestComponent } from './pages/ui-test/ui-test.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'formSend', component: FormSendComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'ui-test', component: UiTestComponent }
];
