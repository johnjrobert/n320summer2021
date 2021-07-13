//Class base for all instruments.
class Instrument {
  constructor(loudness, family, playVerb) {
    this.loudness = loudness;
    this.playVerb = playVerb;
    this.family = family;
  }
  //method to log information passed into base to the console.
  concert() {
    console.log(
      "{{",
      this.loudness,
      "}}",
      "{{",
      this.family,
      "}}",
      "{{",
      this.playVerb,
      "}}"
    );
  }
}
//class for Woodwind, which takes in custom loudness, and has its family and playVerb hardcoded.
class Woodwind extends Instrument {
  constructor(loudness, family, playVerb) {
    super(loudness, family, playVerb);
    this.loudness = loudness;
    this.family = "Woodwind";

    this.playVerb = "Blow";
  }
}

//class for percussion, which takes in custom loudness, and has its family and playVerb hardcoded.
class Percussion extends Instrument {
  constructor(loudness, family, playVerb) {
    super(loudness, family, playVerb);
    this.loudness = loudness;
    this.family = "Percussion";

    this.playVerb = "Beat";
  }
}

//class for String, which takes in custom loudness, and has its family and playVerb hardcoded.
class String extends Instrument {
  constructor(loudness, family, playVerb) {
    super(loudness, family, playVerb);
    this.loudness = loudness;
    this.family = "String";

    this.playVerb = "Pluck";
  }
}
