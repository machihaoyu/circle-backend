package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/19.
 */
public class DTO4 {
    @ApiModelProperty(value = "城市")
    private String city;
    @ApiModelProperty(value = "注册数")
    private String registerNum;
    @ApiModelProperty(value = "协议放款额(亿)")
    private String planMoney;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

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
