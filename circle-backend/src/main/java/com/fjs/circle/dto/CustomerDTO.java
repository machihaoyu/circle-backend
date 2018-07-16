package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

import java.math.BigDecimal;

/**
 * Created by yinzf on 2018/7/16.
 */
public class CustomerDTO {
    @ApiModelProperty(value = "排名")
    private Integer rownum;
    @ApiModelProperty(value = "媒体渠道名称")
    private String media;
    @ApiModelProperty(value = "渠道获客数")
    private Integer channelNum;

    public Integer getRownum() {
        return rownum;
    }

    public void setRownum(Integer rownum) {
        this.rownum = rownum;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public Integer getChannelNum() {
        return channelNum;
    }

    public void setChannelNum(Integer channelNum) {
        this.channelNum = channelNum;
    }
}
