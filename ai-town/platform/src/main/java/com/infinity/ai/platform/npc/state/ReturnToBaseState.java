package com.infinity.ai.platform.npc.state;

import com.infinity.ai.platform.npc.NPC;

//返回到基本状态
public class ReturnToBaseState implements State {
    @Override
    public void enter(NPC npc) {
        System.out.println(npc.getName() + " returns to base.");
    }

    @Override
    public void execute(NPC npc) {
        System.out.println(npc.getName() + " is at the base.");

    }

    @Override
    public void exit(NPC npc) {
        System.out.println(npc.getName() + " leaves the base.");
    }
}