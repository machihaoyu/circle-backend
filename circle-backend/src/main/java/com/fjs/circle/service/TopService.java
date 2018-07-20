package com.fjs.circle.service;

import com.fjs.circle.dto.*;
import com.fjs.circle.mappers.DappOperateCityDMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/20.
 */
@Service
public class TopService {
    @Autowired
    private DappOperateCityDMapper dappOperateCityDMapper;

    /**
     *top10
     * @return
     */
    public List<Top10DTO> getTop10(){
        List<Top10DTO> top10DTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        top10DTOList = dappOperateCityDMapper.top10(paramsMap);
        return top10DTOList;
    }

    /**
     * top16
     * @return
     */
    public List<Top16DTO> getTop16(){
        List<Top16DTO> top16DTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        top16DTOList = dappOperateCityDMapper.top16(paramsMap);
        return top16DTOList;
    }

    /**
     * top22
     * @return
     */
    public List<Top22DTO> getTop22(){
        List<Top22DTO> top22DTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        top22DTOList = dappOperateCityDMapper.top22(paramsMap);
        return top22DTOList;
    }

    /**
     * top16
     * @return
     */
    public List<Top5DTO> getTop5(){
        List<Top5DTO> top5DTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        top5DTOList = dappOperateCityDMapper.top5(paramsMap);
        return top5DTOList;
    }
}
