package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * 不分城市
 * Created by gf on 2018/7/31.
 */
public class NotCityDTO {

    @ApiModelProperty(value = "注册人数")
    private String registerNum;

    @ApiModelProperty(value = "协议贷款额")
    private String planMoney;

    public String getRegisterNum() {
        return registerNum;
    }

    public void setRegisterNum(String registerNum) {
        this.registerNum = registerNum;
    }

    public String getPlanMoney() {
        return planMoney;
    }

    public void setPlanMoney(String planMoney) {
        this.planMoney = planMoney;
    }
}
