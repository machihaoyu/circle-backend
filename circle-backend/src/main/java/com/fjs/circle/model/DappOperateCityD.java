package com.fjs.circle.model;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by yinzf on 2018/7/9.
 */
public class DappOperateCityD {
    private Date createDate;
    private String city;
    private Integer registerNum;
    private Integer houseNum;
    private BigDecimal planMoney;
    private BigDecimal serviceCommission;
    private Integer productNum;
    private Date dbEntTime;
    private Date dbUpdTime;

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getRegisterNum() {
        return registerNum;
    }

    public void setRegisterNum(Integer registerNum) {
        this.registerNum = registerNum;
    }

    public Integer getHouseNum() {
        return houseNum;
    }

    public void setHouseNum(Integer houseNum) {
        this.houseNum = houseNum;
    }

    public BigDecimal getPlanMoney() {
        return planMoney;
    }

    public void setPlanMoney(BigDecimal planMoney) {
        this.planMoney = planMoney;
    }

    public BigDecimal getServiceCommission() {
        return serviceCommission;
    }

    public void setServiceCommission(BigDecimal serviceCommission) {
        this.serviceCommission = serviceCommission;
    }

    public Integer getProductNum() {
        return productNum;
    }

    public void setProductNum(Integer productNum) {
        this.productNum = productNum;
    }

    public Date getDbEntTime() {
        return dbEntTime;
    }

    public void setDbEntTime(Date dbEntTime) {
        this.dbEntTime = dbEntTime;
    }

    public Date getDbUpdTime() {
        return dbUpdTime;
    }

    public void setDbUpdTime(Date dbUpdTime) {
        this.dbUpdTime = dbUpdTime;
    }
}
