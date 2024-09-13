import {
  _decorator,
  Component,
  EventTouch,
  Label,
  Node,
  ScrollView,
  Sprite,
  SystemEvent,
  Vec2,
  Vec3,
  view,
} from "cc";
import { GlobalConfig } from "../game/config/GlobalConfig";
import WebUtils from "../utils/WebUtils";
import { hight } from "./TownView";
const { ccclass, property } = _decorator;

export const npcICON = {
    0: "home/topInfoColum/Farmer",
    1: "home/topInfoColum/Grocer",
    2: "home/topInfoColum/Baker",
    3: "home/topInfoColum/FLOKI",
    4: "home/topInfoColum/Herdman",
    5: "home/PePe"
  };

export const NpcHomeName = {
  0: "Farmer Home",
  1: "Grocer Home",
  2: "Baker Home",
  3: "FLOKI Home",
  4: "Herdman Home",
  5: "PePe Home"
};

export const NpcViewName = {
  0: "Farmer View",
  1: "Grocer View",
  2: "Baker View",
  3: "FLOKI View",
  4: "Herdman View",
  5: "PePe View"
};


@ccclass("touch")
export class touch extends Component {
  @property(Node)
  scrollNode: Node;

  @property(Node)
  canvas: Node;

  @property(Node)
  watchType: Node;

  @property(Node)
  npcIcon: Node;

  @property(Label)
  npcHomeName: Label;

  @property(Node)
  camera: Node;

  @property(Node)
  front: Node;

  npcIndex: number = 0;
  preOffset: number;
  curOffset: number;
  start() {
    this.node.on(Node.EventType.TOUCH_START, (event) => {
      const scroll = this.scrollNode.getComponent(ScrollView);
    });

    this.node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
      const startPos = event.touch.getStartLocation();
      const prePos = event.touch.getPreviousLocation();
      if (Math.abs(startPos.y - prePos.y) > Math.abs(startPos.x - prePos.x)) {
        if (startPos.y > prePos.y) {
          const scroll = this.scrollNode.getComponent(ScrollView);
          scroll.scrollToOffset(
            new Vec2(
              scroll.getScrollOffset().x,
              scroll.getScrollOffset().y - 930
            ),
            1,
            true
          );
        }
        if (startPos.y < prePos.y) {
          const scroll = this.scrollNode.getComponent(ScrollView);
          scroll.scrollToOffset(
            new Vec2(
              scroll.getScrollOffset().x,
              scroll.getScrollOffset().y + 930
            ),
            1,
            true
          );
        }
      } else {
        if (startPos.x > prePos.x) {
          if (this.canvas.scale.x === 2) {
            this.canvas.active =false
            this.canvas.setScale(1, 1);
            WebUtils.getResouceImg("home/topInfoColum/view", this.watchType);
            WebUtils.getResouceImg(npcICON[this.npcIndex], this.npcIcon);
            this.npcHomeName.string = NpcHomeName[this.npcIndex];
            this.camera.setPosition(0, 0)
            // this.front.setScale(1, 1)
            this.front.setPosition(0, 0)
            this.canvas.active = true
          }
        }
        if (startPos.x < prePos.x) {
          if (this.canvas.scale.x === 1) {
            this.canvas.active =false
            this.canvas.setScale(2, 2);
            WebUtils.getResouceImg("home/topInfoColum/eye", this.watchType);
            WebUtils.getResouceImg(npcICON[this.npcIndex], this.npcIcon);
            this.npcHomeName.string = NpcViewName[this.npcIndex];
            this.canvas.active = true

            // const gameView = view.getVisibleSize();
            // this.camera.setPosition(GlobalConfig.instance.curViewNpcX - gameView.width / 2, this.scrollNode.getPosition().y - (hight - GlobalConfig.instance.curViewNpcY))
          }
        }
      }
    });
  }

  scrollEvent(event, data) {
    if (data === 12) {
      const scroll = this.scrollNode.getComponent(ScrollView);
      this.preOffset = scroll.getScrollOffset().y;
    }

    if (data === 9) {
      const scroll = this.scrollNode.getComponent(ScrollView);
      this.curOffset = scroll.getScrollOffset().y;
      if (Math.abs(this.preOffset - this.curOffset) > 500) {
        if (this.preOffset < this.curOffset) {
          GlobalConfig.instance.currentNpcIndex =
            GlobalConfig.instance.currentNpcIndex + 1;
          this.npcIndex = GlobalConfig.instance.currentNpcIndex;
        } else {
          GlobalConfig.instance.currentNpcIndex =
            GlobalConfig.instance.currentNpcIndex - 1;
          this.npcIndex = GlobalConfig.instance.currentNpcIndex;
        }
        if (this.canvas.scale.x === 1) {
            this.npcHomeName.string = NpcHomeName[this.npcIndex];
        } else {
            this.npcHomeName.string = NpcViewName[this.npcIndex];
            // const gameView = view.getVisibleSize();
            // this.camera.setPosition(GlobalConfig.instance.curViewNpcX - gameView.width / 2, this.scrollNode.getPosition().y - (hight - GlobalConfig.instance.curViewNpcY))
        }
      }
      WebUtils.getResouceImg(npcICON[this.npcIndex], this.npcIcon);
    }
  }

  scrollUp() {}

  scrollDown() {}

  scrollLeft() {}

  scrollRight() {}

  update(deltaTime: number) {}
}
