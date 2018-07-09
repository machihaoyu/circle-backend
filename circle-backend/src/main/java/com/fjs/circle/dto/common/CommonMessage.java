package com.fjs.circle.dto.common;

/**
 * Created by yinzf on 2018/7/9.
 */
public enum CommonMessage {
    SUCCESS(0,"成功"),
    FAIL(1,"失败");

    /**
     * code值
     */
    private final Integer code;

    /**
     * code对应的描述
     */
    private final String codeDesc;

    CommonMessage(Integer code, String codeDesc) {
        this.code = code;
        this.codeDesc = codeDesc;
    }

    public Integer getCode() {
        return code;
    }

    public String getCodeDesc() {
        return codeDesc;
    }
}
