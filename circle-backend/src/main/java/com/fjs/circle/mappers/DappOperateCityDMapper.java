package com.fjs.circle.mappers;

import com.fjs.circle.dto.*;
import com.fjs.circle.model.DappOperateCityD;
import com.fjs.circle.util.MyMapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/9.
 */
public interface DappOperateCityDMapper extends MyMapper<DappOperateCityD> {

    public List<DappOperateCityDDTO> selectView1(Map<String, Object> paramsMap);

    public List<DappOperateCityDDTO2> selectYear(Map<String, Object> paramsMap);

    public List<DTO2> selectView2(Map<String, Object> paramsMap);

    public List<ChannelDTO> getHistoryChannel(Map<String, Object> paramsMap);

    public List<ChannelDTO> getYearChannel(Map<String, Object> paramsMap);

    public List<CustomerDTO> getHistoryMedia(Map<String, Object> paramsMap);

    public List<CustomerDTO> getYearMedia(Map<String, Object> paramsMap);

    public List<EfficiencyDTO> getHistoryEfficiency(Map<String, Object> paramsMap);

    public List<EfficiencyDTO> getYearEfficiency(Map<String, Object> paramsMap);

    public List<DTO3> getPole(Map<String, Object> paramsMap);

    public List<DTO4> getAllCity(Map<String, Object> paramsMap);

    public List<DTO4> getCity(Map<String, Object> paramsMap);

    public List<DTO5> getTrend(Map<String, Object> paramsMap);

    public List<Top10DTO> top10(Map<String, Object> paramsMap);

    public List<Top16DTO> top16(Map<String, Object> paramsMap);

    public List<Top22DTO> top22(Map<String, Object> paramsMap);

    public List<Top5DTO> top5(Map<String, Object> paramsMap);
}
