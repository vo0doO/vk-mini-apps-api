import { VKConnect } from '@vkontakte/vk-connect';
import { Common } from './api/Common';
import { VKPay } from './api/VKPay';
import { Flashlight } from './api/Flashlight';
import { DirectGames } from './api/DirectGames';
import { Storage } from './api/Storage';
import { TapticEngine } from './api/TapticEngine';
import { Communities } from './api/Community';
import { Interface } from './api/Interface';
import { Ads } from './api/Ads';
import { Audio } from './api/Audio';

/**
 * VK Mini apps API. Contains all VK Connect methods separated by categories
 */
export class VKMiniAppAPI {
  constructor(private connect: VKConnect) {}

  /** Common Mini App methods */
  public common = new Common(this.connect);

  /** VK Pay methods */
  public vkPay = new VKPay(this.connect);

  /** Flashlights methods */
  public flashlight = new Flashlight(this.connect);

  /** DirectGames methods */
  public directGames = new DirectGames(this.connect);

  /** Storage methods */
  public storage = new Storage(this.connect);

  /** Taptic Engine methods */
  public tapticEngine = new TapticEngine(this.connect);

  /** Interface methods */
  public interface = new Interface(this.connect);

  /** Communities methods */
  public communities = new Communities(this.connect);

  /** Advertisement methods */
  public ads = new Ads(this.connect);

  /** Common Mini App methods */
  public audio = new Audio(this.connect);
}
