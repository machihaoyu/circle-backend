package com.fjs.circle.service;

import com.fjs.circle.dto.stage2.*;
import com.fjs.circle.mappers.Stage2Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yinzf on 2018/7/26.
 */
@Service
public class Stage2Service {
    @Autowired
    private Stage2Mapper stage2Mapper;

    /**
     * 年度-签订协议数
     * @return
     */
    public List<YearServiceDTO> getYearService(){
        List<YearServiceDTO> yearServiceDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearServiceDTOList = stage2Mapper.getYearService(paramsMap);
        return yearServiceDTOList;
    }

    /**
     * 年度-放款额
     * @return
     */
    public List<YearContractDTO> getContractService(){
        List<YearContractDTO> yearContractDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearContractDTOList = stage2Mapper.getYearContract(paramsMap);
        return yearContractDTOList;
    }

    /**
     *     年度收佣
     *     @return
     */
    public List<YearCommissionDTO> getCommissionService(){
        List<YearCommissionDTO> yearCommissionDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearCommissionDTOList = stage2Mapper.getYearCommission(paramsMap);
        return yearCommissionDTOList;
    }

    /**
     * 季度协议
     * @return
     */
    public List<YearServiceDTO> getSeasonService(){
        List<YearServiceDTO> yearServiceDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearServiceDTOList = stage2Mapper.getSeasonService(paramsMap);
        return yearServiceDTOList;
    }

    /**
     * 季度放款
     * @return
     */
    public List<YearContractDTO> getSeasonContract(){
        List<YearContractDTO> yearContractDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearContractDTOList = stage2Mapper.getSeasonContract(paramsMap);
        return yearContractDTOList;
    }

    /**
     *     季度收佣
     *     @return
     */
    public List<YearCommissionDTO> getSeasonCommission(){
        List<YearCommissionDTO> yearCommissionDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearCommissionDTOList = stage2Mapper.getSeasonCommission(paramsMap);
        return yearCommissionDTOList;
    }


    /**
     * 月度协议
     * @return
     */
    public List<YearServiceDTO> getMonthService(){
        List<YearServiceDTO> yearServiceDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearServiceDTOList = stage2Mapper.getMonthService(paramsMap);
        return yearServiceDTOList;
    }

    /**
     * 月度放款
     * @return
     */
    public List<YearContractDTO> getMonthContract(){
        List<YearContractDTO> yearContractDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearContractDTOList = stage2Mapper.getMonthContract(paramsMap);
        return yearContractDTOList;
    }

    /**
     * 月度收佣
     * @return
     */
    public List<YearCommissionDTO> getMonthCommission(){
        List<YearCommissionDTO> yearCommissionDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        yearCommissionDTOList = stage2Mapper.getMonthCommission(paramsMap);
        return yearCommissionDTOList;
    }

    /**
     * 模块一 总的
     * @return
     */
    public List<TotalDTO> getTotal(){
        List<TotalDTO> totalDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        totalDTOList = stage2Mapper.getTotal(paramsMap);
        return totalDTOList;
    }

    /**
     * 模块一 BD/网络营销
     * @return
     */
    public List<BDDTO> getBD(){
        List<BDDTO> bdDTOList = new ArrayList<>();
        Map<String, Object> paramsMap = new HashMap<>();
        bdDTOList = stage2Mapper.getBD(paramsMap);
        return bdDTOList;
    }
}
