package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * BD/网络营销
 * Created by yinzf on 2018/7/26.
 */
public class BDDTO {
    @ApiModelProperty(value = "一级渠道描述")
    private String firstClassDesc;
    @ApiModelProperty(value = "媒体")
    private String media;
    @ApiModelProperty(value = "获客数")
    private String channelNum;

    public String getFirstClassDesc() {
        return firstClassDesc;
    }

    public void setFirstClassDesc(String firstClassDesc) {
        this.firstClassDesc = firstClassDesc;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public String getChannelNum() {
        return channelNum;
    }

    public void setChannelNum(String channelNum) {
        this.channelNum = channelNum;
    }
}
