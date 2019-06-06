import { Component, OnInit } from '@angular/core';
import { BingSpeechClient, VoiceVoiceSynthesisResponse } from 'bingspeech-api-client';

// Bing Speech Key (https://www.microsoft.com/cognitive-services/en-us/subscriptions)
let subscriptionKey = '403d57a0aa4645b1be469fdf8e55039a';

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
