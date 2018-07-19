package com.fjs.circle.service;

import com.fjs.circle.dto.DTO3;
import com.fjs.circle.dto.DTO4;
import com.fjs.circle.mappers.DappOperateCityDMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/19.
 */
@Service
public class View4Service {
    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    /**
     * 视图4
     * @return
     */
    public List<DTO4> selectAllCity(){
        List<DTO4> dto4List = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dto4List = dappOperateCityDMapper.getAllCity(paramsMap);
        return dto4List;
    }

    /**
     * 视图4
     * @return
     */
    public List<DTO4> selectCity(){
        List<DTO4> dto4List = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dto4List = dappOperateCityDMapper.getCity(paramsMap);
        return dto4List;
    }
}
