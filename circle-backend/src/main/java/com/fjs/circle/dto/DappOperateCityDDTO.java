package com.fjs.circle.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * 显示DTO
 * Created by yinzf on 2018/7/9.
 */
public class DappOperateCityDDTO implements Serializable{

    @ApiModelProperty(value = "城市id")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private Integer id;
    @ApiModelProperty(value = "城市")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private String city;
    @ApiModelProperty(value = "注册数")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private Integer totalRegisterNum;
    @ApiModelProperty(value = "有房数")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private Integer totalHouseNum;
    @ApiModelProperty(value = "协议放款额")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private BigDecimal totalPlanMoney;
    @ApiModelProperty(value = "协议佣金额")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private BigDecimal totalServiceCommission;
    @ApiModelProperty(value = "资金渠道开拓数")
    @JsonSerialize(include= JsonSerialize.Inclusion.NON_EMPTY)
    private Integer totalProductNum;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getTotalRegisterNum() {
        return totalRegisterNum;
    }

    public void setTotalRegisterNum(Integer totalRegisterNum) {
        this.totalRegisterNum = totalRegisterNum;
    }

    public Integer getTotalHouseNum() {
        return totalHouseNum;
    }

    public void setTotalHouseNum(Integer totalHouseNum) {
        this.totalHouseNum = totalHouseNum;
    }

    public BigDecimal getTotalPlanMoney() {
        return totalPlanMoney;
    }

    public void setTotalPlanMoney(BigDecimal totalPlanMoney) {
        this.totalPlanMoney = totalPlanMoney;
    }

    public BigDecimal getTotalServiceCommission() {
        return totalServiceCommission;
    }

    public void setTotalServiceCommission(BigDecimal totalServiceCommission) {
        this.totalServiceCommission = totalServiceCommission;
    }

    public Integer getTotalProductNum() {
        return totalProductNum;
    }

    public void setTotalProductNum(Integer totalProductNum) {
        this.totalProductNum = totalProductNum;
    }
}
