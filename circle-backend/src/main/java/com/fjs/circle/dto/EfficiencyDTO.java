package com.fjs.circle.dto;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/16.
 */
public class EfficiencyDTO {
    @ApiModelProperty(value = "排名")
    private Integer rownum;
    @ApiModelProperty(value = "媒体渠道")
    private String media;
    @ApiModelProperty(value = "有效率")
    private String efficiency;

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

    public String getEfficiency() {
        return efficiency;
    }

    public void setEfficiency(String efficiency) {
        this.efficiency = efficiency;
    }
}
