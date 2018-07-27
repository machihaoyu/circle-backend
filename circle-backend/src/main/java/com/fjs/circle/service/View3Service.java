package com.fjs.circle.service;

import com.fjs.circle.dto.DTO3;
import com.fjs.circle.dto.DappOperateCityDDTO;
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
public class View3Service {
    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    /**
     * 视图3
     * @return
     */
    public List<DTO3> selectView3(){
        List<DTO3> dto3List = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dto3List = dappOperateCityDMapper.getPole(paramsMap);
        return dto3List;
    }
}
