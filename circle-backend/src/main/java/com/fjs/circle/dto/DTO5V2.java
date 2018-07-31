package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by gf on 2018/7/31.
 */
public class DTO5V2 {

    @ApiModelProperty(value = "分季度")
    private String qu;
    @ApiModelProperty(value = "服务客户数(万)")
    private String serviceNum;
    @ApiModelProperty(value = "协议贷款额(亿)")
    private String planMoney;

    public String getQu() {
        return qu;
    }

    public void setQu(String qu) {
        this.qu = qu;
    }

    public String getServiceNum() {
        return serviceNum;
    }

    public void setServiceNum(String serviceNum) {
        this.serviceNum = serviceNum;
    }

    public String getPlanMoney() {
        return planMoney;
    }

    public void setPlanMoney(String planMoney) {
        this.planMoney = planMoney;
    }
}
