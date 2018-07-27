package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/20.
 */
public class Top22DTO {
    @ApiModelProperty(value = "日排名")
    private String rownum;
    @ApiModelProperty(value = "分公司")
    private String subCompanyName;
    @ApiModelProperty(value = "巴员名称")
    private String memberName;
    @ApiModelProperty(value = "沟通数")
    private String communicateNum;

    public String getRownum() {
        return rownum;
    }

    public void setRownum(String rownum) {
        this.rownum = rownum;
    }

    public String getSubCompanyName() {
        return subCompanyName;
    }

    public void setSubCompanyName(String subCompanyName) {
        this.subCompanyName = subCompanyName;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getCommunicateNum() {
        return communicateNum;
    }

    public void setCommunicateNum(String communicateNum) {
        this.communicateNum = communicateNum;
    }
}
