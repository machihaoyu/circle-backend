package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * 年度签订协议数
 * Created by yinzf on 2018/7/26.
 */
public class YearServiceDTO {
    @ApiModelProperty(value = "年度排名")
    private Integer rownum;
    @ApiModelProperty(value = "分公司")
    private String subCompanyName;
    @ApiModelProperty(value = "签订协议数")
    private Integer serviceContractNum;

    public String getSubCompanyName() {
        return subCompanyName;
    }

    public void setSubCompanyName(String subCompanyName) {
        this.subCompanyName = subCompanyName;
    }

    public Integer getServiceContractNum() {
        return serviceContractNum;
    }

    public void setServiceContractNum(Integer serviceContractNum) {
        this.serviceContractNum = serviceContractNum;
    }

    public Integer getRownum() {
        return rownum;
    }

    public void setRownum(Integer rownum) {
        this.rownum = rownum;
    }
}
