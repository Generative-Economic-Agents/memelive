package com.infinity.common.consts;

public enum StateType {

    SLEEP(1),
    MOVE(2);

    private int state;

    StateType(int state) {
        this.state = state;
    }

    public int getState() {
        return state;
    }
}
