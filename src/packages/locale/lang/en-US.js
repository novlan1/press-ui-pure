export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  complete: 'Complete',
  loading: 'Loading...',
  telEmpty: 'Please fill in the tel',
  nameEmpty: 'Please fill in the name',
  nameInvalid: 'Malformed name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  reply: 'Reply',
  calendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: maxRange => `Choose no more than ${maxRange} days`,
  },
  dialog: {
    title: 'Prompt',
  },
  scheduleTree: {
    pending: 'Pending',
    emptyTeam: 'Opponent No-Show',
    quitScore: 'Forfeit',
    champion: 'Champion',
    thirdPlace: 'Third Place',
    checkFinal: 'Check Final >',
    groupedChampion: isChampion => (isChampion ? 'Group Champion' : 'Third Place In Group'),

    ended: 'Ended',
    playing: 'Match in Progress...',
    currentBo: (curBo, boType) => `Current: Match (${curBo}/${boType})`,

    joining: 'Joining...',
    joiningAndTimeoutAutoQuit: 'Joining... Timeout Automatic Forfeit',
    startMatchOnTime: 'Starts on MM-dd at hh:mm (UTC±0)',
    endTimeFormat: 'MM-dd at hh:mm',

    startBattleAuto: 'Start When Full',
    startBattleManual: 'Waiting for administrator to start the match',
    startBattleOnTime: 'Scheduled Start',
  },
  scheduleList: {
    finals: 'Grand Finals',
    finalsChampion: 'Champion',
    me: 'Me',

    joinDeadline: 'Dea\\dline: M-d at hh:mm',

    manage: 'Manage',
    spectate: 'Spectate',
    toPlay: 'Play a Match',
    reCap: 'Recap',
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
  },
  actTipDialog: {
    prompt: 'Prompt Description',
  },
};
