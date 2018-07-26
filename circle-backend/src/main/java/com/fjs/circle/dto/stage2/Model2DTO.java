package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/26.
 */
public class Model2DTO {
    @ApiModelProperty(value = "年度排名")
    private String financialInstatutionType;
    @ApiModelProperty(value = "产品类型")
    private String productType;
    @ApiModelProperty(value = "放款额")
    private String giveMoney;

    public String getFinancialInstatutionType() {
        return financialInstatutionType;
    }

    public void setFinancialInstatutionType(String financialInstatutionType) {
        this.financialInstatutionType = financialInstatutionType;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getGiveMoney() {
        return giveMoney;
    }

    public void setGiveMoney(String giveMoney) {
        this.giveMoney = giveMoney;
    }
}
