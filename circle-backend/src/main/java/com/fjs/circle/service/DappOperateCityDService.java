package com.fjs.circle.service;

import com.fjs.circle.dto.DappOperateCityDDTO;
import com.fjs.circle.mappers.DappOperateCityDMapper;
import com.fjs.circle.model.DappOperateCityD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/9.
 */
@Service
public class DappOperateCityDService {

    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    public List<DappOperateCityDDTO> selectOne(){
        List<DappOperateCityDDTO> dappOperateCityDDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dappOperateCityDDTOList = dappOperateCityDMapper.selectView1(paramsMap);
        return dappOperateCityDDTOList;
    }
}
