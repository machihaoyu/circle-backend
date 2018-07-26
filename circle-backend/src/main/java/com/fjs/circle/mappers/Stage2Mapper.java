package com.fjs.circle.mappers;

import com.fjs.circle.dto.stage2.*;

import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/26.
 */
public interface Stage2Mapper {
    public List<YearServiceDTO> getYearService(Map<String, Object> paramsMap);

    public List<YearContractDTO> getYearContract(Map<String, Object> paramsMap);

    public List<YearCommissionDTO> getYearCommission(Map<String, Object> paramsMap);

    public List<YearServiceDTO> getSeasonService(Map<String, Object> paramsMap);

    public List<YearContractDTO> getSeasonContract(Map<String, Object> paramsMap);

    public List<YearCommissionDTO> getSeasonCommission(Map<String, Object> paramsMap);

    public List<YearServiceDTO> getMonthService(Map<String, Object> paramsMap);

    public List<YearContractDTO> getMonthContract(Map<String, Object> paramsMap);

    public List<YearCommissionDTO> getMonthCommission(Map<String, Object> paramsMap);

    public List<TotalDTO> getTotal(Map<String, Object> paramsMap);

    public List<BDDTO> getBD(Map<String, Object> paramsMap);
}
