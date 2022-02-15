import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  bell() {
    var synth = (<any>window).speechSynthesis; var voices = [];
    var toSpeak = new SpeechSynthesisUtterance("Appointment Booked");

    voices = synth.getVoices();
    voices.forEach((voice) => {
      if (voice.name === "Microsoft Heera - English (India)") {
        toSpeak.voice = voice;

      }
    });
    synth.speak(toSpeak);
  }

  constructor() { }

  ngOnInit() {
  }

}
