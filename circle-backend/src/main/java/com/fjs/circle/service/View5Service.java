package com.fjs.circle.service;

import com.fjs.circle.dto.DTO5;
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
public class View5Service {
    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    /**
     * 视图5
     * @return
     */
    public List<DTO5> getTrend(){
        List<DTO5> dto5List = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dto5List = dappOperateCityDMapper.getTrend(paramsMap);
        return dto5List;
    }
}
