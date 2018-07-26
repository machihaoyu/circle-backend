package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/26.
 */
public class TotalDTO {
    @ApiModelProperty(value="一级渠道描述")
    private String firstClassDesc;
    @ApiModelProperty(value="获客数")
    private String channelNum;

    public String getFirstClassDesc() {
        return firstClassDesc;
    }

    public void setFirstClassDesc(String firstClassDesc) {
        this.firstClassDesc = firstClassDesc;
    }

    public String getChannelNum() {
        return channelNum;
    }

    public void setChannelNum(String channelNum) {
        this.channelNum = channelNum;
    }
}
