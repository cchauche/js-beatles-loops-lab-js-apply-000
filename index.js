function theBeatlesPlay (musicians, instruments) {
  let whatTheMembersPlay = [];
  for (let i = 0; i < musicians.length; i++) {
    let musicanPlays = musicians[i] + ' plays ' + instruments[i];
    whatTheMembersPlay.push(musicanPlays);
  }
}
