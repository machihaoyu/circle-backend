package com.fjs.circle.service;

import com.fjs.circle.dto.DTO2;
import com.fjs.circle.dto.DappOperateCityDDTO;
import com.fjs.circle.dto.DappOperateCityDDTO2;
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

    /**
     * 视图1
     * @return
     */
    public List<DappOperateCityDDTO> selectOne(){
        List<DappOperateCityDDTO> dappOperateCityDDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dappOperateCityDDTOList = dappOperateCityDMapper.selectView1(paramsMap);
        return dappOperateCityDDTOList;
    }

    public List<DTO2> selectTwo(){
        List<DTO2> dto2List = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dto2List = dappOperateCityDMapper.selectView2(paramsMap);
        return dto2List;
    }

    /**
     * 年度数据
     * @return
     */
    public List<DappOperateCityDDTO2> selectYear(){
        List<DappOperateCityDDTO2> dappOperateCityDDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        dappOperateCityDDTOList = dappOperateCityDMapper.selectYear(paramsMap);
        return dappOperateCityDDTOList;
    }
}
