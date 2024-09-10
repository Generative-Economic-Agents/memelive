System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Node, randomRangeInt, network, socket, loginModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, randomPool, treePos, cloudPos, cloudAdapt, adapt_x, adapt_cow_x, cow_x, treeAdapt, rabbit_x, TownCreateRole;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfnetwork(extras) {
    _reporterNs.report("network", "../model/RequestData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocket(extras) {
    _reporterNs.report("socket", "../game/App", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginModel(extras) {
    _reporterNs.report("loginModel", "../model/loginModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      network = _unresolved_2.network;
    }, function (_unresolved_3) {
      socket = _unresolved_3.socket;
    }, function (_unresolved_4) {
      loginModel = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a70d4m3nPRKxq1YP4GhL6N4", "TownCreateRole", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      randomPool = {
        name: ['John', 'Mary', 'Michael', 'Sarah', 'David', 'Emily', 'James', 'Jessica', 'Robert', 'Elizabeth', 'William', 'Jennifer', 'Richard', 'Laura', 'Thomas', 'Megan', 'Charles', 'Amanda', 'Christopher', 'Ashley'],
        occupation: ['Doctor', 'Nurse', 'Teacher', 'Engineer', 'Lawyer', 'Accountant', 'Programmer', 'Police', 'Firefighter', 'Builder', 'Salesperson', 'Chef', 'Plumber', 'Driver', 'Electrician', 'Mechanic', 'Journalist', 'Writer', 'Scientist', 'Designer'],
        password: ['Kind', 'Generous', 'Enthusiastic', 'Compassionate', 'Empathetic', 'Altruistic', 'Charitable', 'Warm-hearted', 'Benevolent', 'Thoughtful', 'Supportive', 'Considerate', 'Loving', 'Sympathetic', 'Gracious', 'Philanthropic', 'Affectionate', 'Nurturing', 'Friendly', 'Tender', 'Caring', 'Forgiving', 'Selfless']
      };
      treePos = -480;
      cloudPos = -620;
      cloudAdapt = [1.5, 1, 1.75, 0.5];
      adapt_x = -60;
      adapt_cow_x = -80;
      cow_x = [0, -94, -191, -285];
      treeAdapt = [2.75, 2.75, 2.5, 2.5, 2, 2];
      rabbit_x = [0, -66, -133, -200];

      _export("TownCreateRole", TownCreateRole = (_dec = ccclass('TownCreateRole'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property({
        type: [Node]
      }), _dec15 = property(Node), _dec(_class = (_class2 = class TownCreateRole extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "edit_name", _descriptor, this);

          _initializerDefineProperty(this, "edit_password", _descriptor2, this);

          _initializerDefineProperty(this, "edit_occupation", _descriptor3, this);

          _initializerDefineProperty(this, "randomName", _descriptor4, this);

          _initializerDefineProperty(this, "randomPassword", _descriptor5, this);

          _initializerDefineProperty(this, "randomOccupation", _descriptor6, this);

          _initializerDefineProperty(this, "roleView", _descriptor7, this);

          _initializerDefineProperty(this, "infoView", _descriptor8, this);

          _initializerDefineProperty(this, "roleCreate", _descriptor9, this);

          _initializerDefineProperty(this, "flower", _descriptor10, this);

          _initializerDefineProperty(this, "flower1", _descriptor11, this);

          _initializerDefineProperty(this, "cow", _descriptor12, this);

          _initializerDefineProperty(this, "cloud", _descriptor13, this);

          _initializerDefineProperty(this, "tileMap", _descriptor14, this);

          this.flower_cow_index = 0;
          this.rabbit_index = 0;
          this.addFrame = 0;
          this.addFrame1 = 0;
          this.addFrame2 = 0;
          this.edits = {
            name: this.edit_name,
            occupation: this.edit_occupation,
            password: this.edit_password
          };
          this.addFrameRabbit = 0;
        }

        start() {// this.edits = {
          //     name: this.edit_name,
          //     occupation: this.edit_occupation,
          //     password: this.edit_password
          // }
          // if(loginModel.character){
          //     this.roleCreate.active = false
          //     // let json = new network.GetAllNPCRequest();
          //     // json.command = 10002;
          //     // json.type = 1;
          //     // socket.sendWebSocketBinary(json);
          //     this.tileMap.active = true
          // }else{
          //     this.roleCreate.active = true
          //     this.tileMap.active = false
          //     //this.bgs.active = true
          // }
        }

        getRandomOccupation(event, key) {
          this.edits[key].string = randomPool[key][randomRangeInt(0, randomPool[key].length)];
        }

        infoNextPart() {
          if (this.edit_name.string.length && this.edit_password.string.length && this.edit_occupation) {
            this.roleView.active = true;
            this.infoView.active = false;
          }
        }

        roleNextPart() {
          var json = new (_crd && network === void 0 ? (_reportPossibleCrUseOfnetwork({
            error: Error()
          }), network) : network).CreateRoleRequest();
          json.command = 10001;
          json.type = 1;
          json.data.name = this.edit_name.string;
          json.data.career = this.edit_occupation.string;
          json.data.keyword = this.edit_password.string;
          json.data.model = 900;
          json.data.hair = (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).hair.id;
          json.data.top = (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).shirt.id;
          json.data.bottoms = (_crd && loginModel === void 0 ? (_reportPossibleCrUseOfloginModel({
            error: Error()
          }), loginModel) : loginModel).pants.id;
          (_crd && socket === void 0 ? (_reportPossibleCrUseOfsocket({
            error: Error()
          }), socket) : socket).sendWebSocketBinary(json);
          this.roleCreate.active = false;
          this.tileMap.active = true;
        }

        update(deltaTime) {
          this.addFrame = this.addFrame + deltaTime;
          this.addFrame1 = this.addFrame1 + deltaTime;
          this.addFrame2 = this.addFrame2 + deltaTime;
          this.addFrameRabbit = this.addFrameRabbit + deltaTime;

          if (this.addFrame >= 0.15) {
            this.flower.setPosition(this.flower_cow_index * adapt_x, 0);
            this.flower1.setPosition(this.flower_cow_index * adapt_x, 0); //this.cow.setPosition(cow_x[this.flower_cow_index], 0)

            this.flower_cow_index = this.flower_cow_index >= 3 ? 0 : this.flower_cow_index + 1;
            this.addFrame = 0;
          }

          if (this.addFrame2 > 0.16) {
            // this.flower.setPosition(this.flower_cow_index * adapt_x, 0)
            // this.flower1.setPosition(this.flower_cow_index * adapt_x, 0)
            this.cow.setPosition(cow_x[this.flower_cow_index], 0); //this.flower_cow_index = this.flower_cow_index >= 3 ? 0 : this.flower_cow_index + 1

            this.addFrame2 = 0;
          } // if(this.addFrameRabbit >= 0.10){
          //     this.rabbit.setPosition(rabbit_x[this.rabbit_index], 0)
          //     //this.cow.setPosition(cow_x[this.flower_cow_index], 0)
          //     this.rabbit_index = this.rabbit_index >= 3 ? 0 : this.rabbit_index + 1
          //     this.addFrameRabbit = 0
          // }


          this.cloud.forEach((currentCloud, index) => {
            if (currentCloud.getPosition().x < cloudPos) {
              currentCloud.setPosition(-cloudPos, currentCloud.getPosition().y);
            }

            currentCloud.setPosition(currentCloud.getPosition().x - cloudAdapt[index], currentCloud.getPosition().y);
          }); //   this.treesBg.forEach((tree, index)=>{
          //     if(tree.getPosition().x > -treePos){
          //         tree.setPosition(treePos, tree.getPosition().y)
          //     }
          //     tree.setPosition(tree.getPosition().x + treeAdapt[index], tree.getPosition().y)
          //   })
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edit_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "edit_password", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "edit_occupation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "randomName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "randomPassword", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "randomOccupation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "roleView", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "infoView", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "roleCreate", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "flower", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "flower1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cow", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cloud", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "tileMap", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c15bf16a3219b3bc3cbec2955b7043b9cdde8fa9.js.map