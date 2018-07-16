package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

import java.math.BigDecimal;

/**
 * 资金渠道
 * Created by yinzf on 2018/7/16.
 */
public class ChannelDTO {
    @ApiModelProperty(value = "排名")
    private Integer rownum;
    @ApiModelProperty(value = "资金渠道名称")
    private String feechannelName;
    @ApiModelProperty(value = "放款额")
    private BigDecimal giveMoney;

    public Integer getRownum() {
        return rownum;
    }

    public void setRownum(Integer rownum) {
        this.rownum = rownum;
    }

    public String getFeechannelName() {
        return feechannelName;
    }

    public void setFeechannelName(String feechannelName) {
        this.feechannelName = feechannelName;
    }

    public BigDecimal getGiveMoney() {
        return giveMoney;
    }

    public void setGiveMoney(BigDecimal giveMoney) {
        this.giveMoney = giveMoney;
    }
}
