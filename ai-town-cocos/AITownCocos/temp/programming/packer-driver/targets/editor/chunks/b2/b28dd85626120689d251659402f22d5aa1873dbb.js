System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, SpriteFrame, Texture2D, Sprite, Node, resources, Prefab, instantiate, error, Layers, UITransform, Vec2, Log, WebUtils, _crd, TAG;

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../../../assets/src/utils/LogUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      error = _cc.error;
      Layers = _cc.Layers;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      Log = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82847WiX9NKzppfLV66lTAM", "WebUtils", undefined);

      __checkObsolete__(['assetManager', 'ImageAsset', 'SpriteFrame', 'Texture2D', 'Sprite', 'Node', 'resources', 'Prefab', 'instantiate', 'Asset', 'error', 'Constructor', 'Layers', 'UITransform', 'Vec2']);

      TAG = 'WebUtils';

      _export("default", WebUtils = class WebUtils {
        /**
         * 获取远程图片
         * @param remoteUrl 
         * @param sprite 
         * @param callback 
         * @returns 
         */
        static getRemoteImg(remoteUrl, sprite = null, callback = null) {
          if (!remoteUrl || typeof "dd" != "string") {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "getRemoteImg::remoteUrl错误:" + remoteUrl);
            return;
          }

          try {
            assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
              const spriteFrame = new SpriteFrame();
              const texture = new Texture2D();

              if (!err && sprite) {
                try {
                  if (!sprite.components.length) {
                    return;
                  }

                  sprite.getComponent(Sprite).spriteFrame = null;
                  texture.image = imageAsset;
                  spriteFrame.texture = texture;

                  if (this.resMap[remoteUrl]) {
                    sprite.getComponent(Sprite).spriteFrame = this.resMap[remoteUrl];
                  } else {
                    this.resMap[remoteUrl] = spriteFrame;
                    sprite.getComponent(Sprite).spriteFrame = spriteFrame;
                  }
                } catch (error) {
                  (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                    error: Error()
                  }), Log) : Log).log(TAG, error);
                }
              }

              if (callback) {
                callback(err, spriteFrame);
              }
            });
          } catch (err) {
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log(TAG, "getRemoteImg::remoteUrl错误:", err);
          }
        }

        static getResouceImg(remoteUrl, sprite = null, callback = null) {
          resources.load(remoteUrl + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
            if (!err && sprite) {
              // const spriteFrame = new SpriteFrame();
              // spriteFrame.texture = texture;
              try {
                sprite.getComponent(Sprite).spriteFrame = spriteFrame;
              } catch (error) {
                (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                  error: Error()
                }), Log) : Log).log(TAG, error);
              }
            } else {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, " or sprite 为空", remoteUrl);
            }

            if (callback) {
              callback(err, spriteFrame);
            }
          });
        }

        static getResoucePrefab(remoteUrl, sprite = null, callback = null) {
          resources.load(remoteUrl, Prefab, function (err, prefab) {
            let newNode;

            if (sprite) {
              try {
                newNode = instantiate(prefab);
                sprite.addChild(newNode);
              } catch (error) {}
            } else {
              (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
                error: Error()
              }), Log) : Log).log(TAG, "sprite 为空");
            }

            if (callback) {
              callback(err, newNode);
            }
          });
        }

        static preloadPrefab(remoteUrl, callback = null) {
          resources.load(remoteUrl, Prefab, function (err, prefab) {
            let newNode;
            newNode = instantiate(prefab);

            if (callback) {
              callback(err, newNode);
            }
          });
        }

        static protocal(url) {
          if (!url) return;

          if (url.indexOf("http://") !== -1) {
            return url.replace("http://", "https://");
          } else {
            if (url.indexOf("https://") !== -1) {
              return `${url}`;
            } else {
              return `https:${url}`; //  "//"
            }
          }
        }

        static loadRes(url, type, cb) {
          if (type) {
            resources.load(url, type, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          } else {
            resources.load(url, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          }
        }

        static createSprite(width = 10, height = 10, name) {
          let spr = new Node();
          spr.layer = Layers.Enum.UI_2D; //Layer 设置要准确 ui_2d;

          spr.addComponent(Sprite);
          spr.getComponent(UITransform).setAnchorPoint(new Vec2(0, 1));
          spr.getComponent(UITransform).width = width;
          spr.getComponent(UITransform).height = height;
          return spr;
        } // 使用number类型代替NodeJS.Timeout
        // 截流函数示例


        static throttle(fn, limit) {
          return function (...args) {
            if (WebUtils.timeoutStream === null) {
              WebUtils.timeoutStream = window.setTimeout(() => {
                fn.apply(this, args);
                WebUtils.timeoutStream = null; // 确保在函数执行后重置timeout
              }, limit);
            }
          };
        } // 防抖函数示例


        static debounce(fn, wait) {
          return function (...args) {
            clearTimeout(WebUtils.timeoutStack);
            WebUtils.timeoutStack = window.setTimeout(() => {
              fn.apply(this, args);
            }, wait);
          };
        }

        static async generateHash(inputString, length) {
          // 将字符串转换为ArrayBuffer
          const encoder = new TextEncoder();
          const data = encoder.encode(inputString); // 使用SubtleCrypto接口生成哈希值

          const hashBuffer = crypto.subtle.digest('SHA-256', data); // 将哈希值转换为十六进制字符串

          const hashHex = hashBuffer.then(buffer => {
            const hexCodes = [];
            const view = new DataView(buffer);

            for (let i = 0; i < view.byteLength; i += 4) {
              const value = view.getUint32(i); // 使用位运算和位移将字节转换为十六进制

              const stringValue = ('0000000' + value.toString(16)).slice(-8);
              hexCodes.push(stringValue);
            }

            return hexCodes.join('');
          }); // 返回固定长度的哈希值

          return await hashHex.then(hex => hex.substring(0, length));
        }

      });

      WebUtils.resMap = {};
      WebUtils.timeoutStack = void 0;
      WebUtils.timeoutStream = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b28dd85626120689d251659402f22d5aa1873dbb.js.map