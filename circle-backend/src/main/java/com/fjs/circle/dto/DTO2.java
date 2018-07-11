package com.fjs.circle.dto;

import java.math.BigDecimal;

/**
 * Created by yinzf on 2018/7/11.
 */
public class DTO2 {
    private String createYear;
    private String feechannelName;
    private BigDecimal giveMoney;
    private Integer rowNumber;

    public String getCreateYear() {
        return createYear;
    }

    public void setCreateYear(String createYear) {
        this.createYear = createYear;
    }

    public BigDecimal getGiveMoney() {
        return giveMoney;
    }

    public void setGiveMoney(BigDecimal giveMoney) {
        this.giveMoney = giveMoney;
    }

    public Integer getRowNumber() {
        return rowNumber;
    }

    public void setRowNumber(Integer rowNumber) {
        this.rowNumber = rowNumber;
    }

    public String getFeechannelName() {
        return feechannelName;
    }

    public void setFeechannelName(String feechannelName) {
        this.feechannelName = feechannelName;
    }
}
