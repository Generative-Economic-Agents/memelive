package com.infinity.ai.platform.npc.state.impl;

import com.infinity.ai.platform.npc.NPC;
import com.infinity.common.consts.StateType;

public class MoveState extends BaseState {

    @Override
    public void enter(NPC npc) {

    }

    @Override
    public StateType getStateType() {
        return StateType.SLEEP;
    }
}
