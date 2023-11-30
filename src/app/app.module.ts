// Angular Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';


// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin.component';
import { ConfigurationComponent } from './theme/layout/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/nav-bar/nav-right/nav-right.component';
import { NavSearchComponent } from './theme/layout/nav-bar/nav-left/nav-search/nav-search.component';
import { ChatMsgComponent } from './theme/layout/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ChatUserListComponent } from './theme/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './theme/layout/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { NavContentComponent } from './theme/layout/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ConfigurationComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    ChatMsgComponent,
    ChatUserListComponent,
    FriendComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,    
    NavGroupComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatTooltipModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


