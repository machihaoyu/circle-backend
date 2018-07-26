package com.fjs.circle.dto.stage2;

import io.swagger.annotations.ApiModelProperty;

/**
 * Created by yinzf on 2018/7/26.
 */
public class Model3HistogramDTO {
    private String createYear;
    @ApiModelProperty(value = "产品类型")
    private String productType;
    @ApiModelProperty(value = "放款额")
    private String giveMoney;
    @ApiModelProperty(value = "城市")
    private String city;

    public String getCreateYear() {
        return createYear;
    }

    public void setCreateYear(String createYear) {
        this.createYear = createYear;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
