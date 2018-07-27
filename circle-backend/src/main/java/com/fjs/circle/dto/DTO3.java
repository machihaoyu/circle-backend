package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * 模块3
 * Created by yinzf on 2018/7/16.
 */
public class DTO3 {
    @ApiModelProperty(value = "周几")
    private String dayofweekName;
    @ApiModelProperty(value = "注册客户数")
    private String serviceNum;
    @ApiModelProperty(value = "协议签订数")
    private String serviceContractNum;
    @ApiModelProperty(value = "放款合同签订数")
    private String contractNum;

    public String getDayofweekName() {
        return dayofweekName;
    }

    public void setDayofweekName(String dayofweekName) {
        this.dayofweekName = dayofweekName;
    }

    public String getServiceNum() {
        return serviceNum;
    }

    public void setServiceNum(String serviceNum) {
        this.serviceNum = serviceNum;
    }

    public String getServiceContractNum() {
        return serviceContractNum;
    }

    public void setServiceContractNum(String serviceContractNum) {
        this.serviceContractNum = serviceContractNum;
    }

    public String getContractNum() {
        return contractNum;
    }

    public void setContractNum(String contractNum) {
        this.contractNum = contractNum;
    }
}
