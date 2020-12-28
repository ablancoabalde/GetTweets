import { Component, Input } from '@angular/core';
import { TwitterService } from './services/twitter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  currentTweets: any = '';

  constructor(private twitter: TwitterService) {}

  async onWordSelected(word: string) {
    try {
      const data: any = await this.twitter.getTweets(word);
      this.currentTweets = data.data.statuses;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}
