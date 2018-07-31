package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * -- 分城市
 * Created by gf on 2018/7/31.
 */
public class CityDTO {

    @ApiModelProperty(value = "城市")
    private String city;

    @ApiModelProperty(value = "注册人数")
    private String registerNum;

    @ApiModelProperty(value = "协议贷款额")
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
