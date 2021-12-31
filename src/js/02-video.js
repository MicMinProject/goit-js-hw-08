import Player from '@vimeo/player';
import {throttle} from 'lodash'

const iframe=document.querySelector('iframe');
const LOCALSTORAGE_KEY="videoplayer-current-time";
const player=new Vimeo.Player(iframe);

const onPlay=e=>{
  
  const vidTime=e.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(vidTime));
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
}

player.on('timeupdate',throttle(onPlay,1500));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))