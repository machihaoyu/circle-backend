package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/19.
 */
public class DTO5 {
    @ApiModelProperty(value = "分季度")
    private String qu;
    @ApiModelProperty(value = "服务客户数(万)")
    private String serviceNum;
    @ApiModelProperty(value = "协议放款额(亿)")
    private String serviceCommission;

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

    public String getServiceCommission() {
        return serviceCommission;
    }

    public void setServiceCommission(String serviceCommission) {
        this.serviceCommission = serviceCommission;
    }
}
