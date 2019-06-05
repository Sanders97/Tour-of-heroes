import { Component, OnInit } from '@angular/core';
import { BingSpeechClient, VoiceVoiceSynthesisResponse } from 'bingspeech-api-client';

// Bing Speech Key (https://www.microsoft.com/cognitive-services/en-us/subscriptions)
let subscriptionKey = 'your_private_subscription_key';

let client = new BingSpeechClient(subscriptionKey);
client.synthesizeStream('I have a dream').then(audioStream => /* ... */);

@Component({
  selector: 'app-text-reader',
  templateUrl: './text-reader.component.html',
  styleUrls: ['./text-reader.component.css']
})
export class TextReaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
