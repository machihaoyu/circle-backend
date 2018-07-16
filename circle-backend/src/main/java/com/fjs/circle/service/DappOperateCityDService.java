package com.fjs.circle.service;

import com.fjs.circle.dto.*;
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

    /**
     * 资金渠道放款对比 - 历史累计
     * @return
     */
    public List<ChannelDTO> historyChannel(){
        List<ChannelDTO> channelDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        channelDTOList = dappOperateCityDMapper.getHistoryChannel(paramsMap);
        return channelDTOList;
    }

    /**
     * 资金渠道放款对比 - 年累计
     * @return
     */
    public List<ChannelDTO> yearChannel(){
        List<ChannelDTO> channelDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        channelDTOList = dappOperateCityDMapper.getYearChannel(paramsMap);
        return channelDTOList;
    }

    /**
     * 渠道获客对比 - 历史累计
     * @return
     */
    public List<CustomerDTO> historyMedia(){
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        customerDTOList = dappOperateCityDMapper.getHistoryMedia(paramsMap);
        return customerDTOList;
    }

    /**
     * 渠道获客对比 - 年累计
     * @return
     */
    public List<CustomerDTO> yearMedia(){
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        customerDTOList = dappOperateCityDMapper.getYearMedia(paramsMap);
        return customerDTOList;
    }

    /**
     * 获客渠道效率转化前十 - 历史累计
     * @return
     */
    public List<EfficiencyDTO> historyEfficiency(){
        List<EfficiencyDTO> efficiencyDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        efficiencyDTOList = dappOperateCityDMapper.getHistoryEfficiency(paramsMap);
        return efficiencyDTOList;
    }

    /**
     * 获客渠道效率转化前十 - 年累计
     * @return
     */
    public List<EfficiencyDTO> yearEfficiency(){
        List<EfficiencyDTO> efficiencyDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        efficiencyDTOList = dappOperateCityDMapper.getYearEfficiency(paramsMap);
        return efficiencyDTOList;
    }
}
