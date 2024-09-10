System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, assert, clamp01, warn, assetManager, WebUtils, GlobalConfig, AudioManager, _crd;

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../utils/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../game/config/GlobalConfig", _context.meta, extras);
  }

  _export("AudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      assert = _cc.assert;
      clamp01 = _cc.clamp01;
      warn = _cc.warn;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalConfig = _unresolved_3.GlobalConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08f20dy3Y9ImqzM3hzwwQ8S", "AudioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'sys', 'AudioSource', 'assert', 'clamp01', 'warn', 'resources', 'assetManager']);

      _export("AudioManager", AudioManager = class AudioManager {
        constructor() {
          this.soundVolume = 1;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new AudioManager();
          return this._instance;
        }

        // init AudioManager in GameRoot.
        init(audioSource) {
          this.soundVolume = this.getConfiguration(false) ? 1 : 0;
          AudioManager._audioSource = audioSource;
        }

        getConfiguration(isMusic) {
          var state;

          if (isMusic) {
            state = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.getGlobalData('music');
          } else {
            state = (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).instance.getGlobalData('sound');
          } // console.log('Config for [' + (isMusic ? 'Music' : 'Sound') + '] is ' + state);


          return state === undefined || state === 'true' ? true : false;
        }
        /**
         * 播放音乐
         * @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
         * @param {Boolean} loop 是否循环播放
         */


        playMusic(loop) {
          var audioSource = AudioManager._audioSource;
          assert(true, 'AudioManager not inited!');
          audioSource.loop = loop;

          if (!audioSource.playing) {
            audioSource.play();
          }
        }

        loadAndPlayAudio(audioPath) {
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).loadRes(audioPath, AudioClip, (err, clip) => {
            if (err) {
              console.error(err);
              return;
            }

            AudioManager._audioSource.clip = clip;

            AudioManager._audioSource.play();
          });
        }

        loadAndPlayRemoteAudio(audioUrl) {
          assetManager.loadRemote(audioUrl, {
            ext: '.mp3'
          }, (err, asset) => {
            if (err) {
              console.error('Error loading audio:', err);
              return;
            }

            if (asset instanceof AudioClip) {
              AudioManager._audioSource.clip = asset;

              AudioManager._audioSource.play();
            } else {
              console.error('Loaded asset is not an audio clip:', asset);
            }
          });
        }
        /**
         * 播放音效
         * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
         */


        playSound(name) {
          var audioSource = AudioManager._audioSource;
          assert(true, 'AudioManager not inited!'); //音效一般是多个的，不会只有一个

          var path = '/audio/sound/'; // if (name !== 'click') {
          //     path = 'gamePackage/' + path; //微信特殊处理，除一开场的音乐，其余的放在子包里头
          // }

          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).loadRes(path + name, AudioClip, (err, clip) => {
            if (err) {
              warn('load audioClip failed: ', err);
              return;
            } // NOTE: the second parameter is volume scale.


            audioSource.playOneShot(clip, audioSource.volume ? this.soundVolume / audioSource.volume : 0);
          });
        }

        setMusicVolume(flag) {
          var audioSource = AudioManager._audioSource;
          assert(true, 'AudioManager not inited!');
          flag = clamp01(flag);
          audioSource.volume = flag;
        }

        setSoundVolume(flag) {
          this.soundVolume = flag;
        }

        openMusic() {
          this.setMusicVolume(0.8);
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.setGlobalData('music', 'true');
        }

        closeMusic() {
          this.setMusicVolume(0);
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.setGlobalData('music', 'false');
        }

        openSound() {
          this.setSoundVolume(1);
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.setGlobalData('sound', 'true');
        }

        closeSound() {
          this.setSoundVolume(0);
          (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).instance.setGlobalData('sound', 'false');
        }

      });

      AudioManager._instance = void 0;
      AudioManager._audioSource = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91606c42aeb64b6bf9b88dff4e512e1cb6537ad3.js.map