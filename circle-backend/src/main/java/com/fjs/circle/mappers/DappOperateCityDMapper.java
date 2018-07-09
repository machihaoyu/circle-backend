package com.fjs.circle.mappers;

import com.fjs.circle.dto.DappOperateCityDDTO;
import com.fjs.circle.model.DappOperateCityD;
import com.fjs.circle.util.MyMapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/9.
 */
public interface DappOperateCityDMapper extends MyMapper<DappOperateCityD> {

    public List<DappOperateCityDDTO> selectView1(Map<String, Object> paramsMap);
}
