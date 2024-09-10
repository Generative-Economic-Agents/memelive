package com.infinity.ai.platform.npc.action;

import java.util.function.Supplier;

// 3.条件节点（Condition）：判断条件是否满足
public class Condition extends BehaviorNode {
    private Supplier<Boolean> condition;

    public Condition(Supplier<Boolean> condition) {
        this.condition = condition;
    }

    @Override
    public boolean execute() {
        return condition.get();
    }
}