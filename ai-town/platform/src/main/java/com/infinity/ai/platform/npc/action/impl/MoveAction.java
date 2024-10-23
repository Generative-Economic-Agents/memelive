package com.infinity.ai.platform.npc.action.impl;

import com.infinity.ai.platform.npc.NPC;
import com.infinity.ai.platform.npc.action.BehaviorNode;
import com.infinity.ai.platform.npc.map.Position;
import com.infinity.ai.platform.npc.state.impl.MoveState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MoveAction extends BehaviorNode {

    private Position target;

    @Override
    public boolean execute(NPC npc) {
        npc.getStateMachine().changeState(new MoveState());
        return false;
    }
}
