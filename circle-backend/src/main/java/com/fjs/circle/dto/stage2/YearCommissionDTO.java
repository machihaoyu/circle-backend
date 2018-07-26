package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * 年度收佣
 * Created by yinzf on 2018/7/26.
 */
public class YearCommissionDTO {
    @ApiModelProperty(value = "年度排名")
    private Integer rownum;
    @ApiModelProperty(value = "分公司")
    private String subCompanyName;
    @ApiModelProperty(value = "收佣额")
    private String commissionTotal;

    public Integer getRownum() {
        return rownum;
    }

    public void setRownum(Integer rownum) {
        this.rownum = rownum;
    }

    public String getSubCompanyName() {
        return subCompanyName;
    }

    public void setSubCompanyName(String subCompanyName) {
        this.subCompanyName = subCompanyName;
    }

    public String getCommissionTotal() {
        return commissionTotal;
    }

    public void setCommissionTotal(String commissionTotal) {
        this.commissionTotal = commissionTotal;
    }
}
