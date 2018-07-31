package com.fjs.circle.service;

import com.fjs.circle.dto.CityDTO;
import com.fjs.circle.dto.DTO5V2;
import com.fjs.circle.dto.NotCityDTO;
import com.fjs.circle.mappers.DappOperateCityDMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 视图修改
 * Created by gf on 2018/7/31.
 */
@Service
public class ViewV2Service {

    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    //模块五二版
    public List<DTO5V2> selectDTO5V2(){
        Map<String, Object> paramsMap = new HashMap<>();

        return dappOperateCityDMapper.selectDTO5V2(paramsMap);
    }

    //不区分城市
    public List<NotCityDTO> selectNOTCity(){
        Map<String, Object> paramsMap = new HashMap<>();

        return dappOperateCityDMapper.selectNOTCity(paramsMap);
    }

    //区分城市
    public List<CityDTO> selectONCity(){
        Map<String, Object> paramsMap = new HashMap<>();

        return dappOperateCityDMapper.selectONCity(paramsMap);
    }

}
