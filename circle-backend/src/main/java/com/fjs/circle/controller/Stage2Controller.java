package com.fjs.circle.controller;

import com.fjs.circle.dto.DappOperateCityDDTO;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.dto.stage2.YearCommissionDTO;
import com.fjs.circle.dto.stage2.YearContractDTO;
import com.fjs.circle.dto.stage2.YearServiceDTO;
import com.fjs.circle.service.Stage2Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 统计阶段2
 * Created by yinzf on 2018/7/26.
 */
@Controller
@Api(description = "阶段2控制器")
@RequestMapping("/stage2/v1")
public class Stage2Controller {
    private  static  final Logger logger = LoggerFactory.getLogger(Stage2Controller.class);

    @Autowired
    private Stage2Service stage2Service;

    @ApiOperation(value="年度-签订协议数", notes="年度-签订协议数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/yearService", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearServiceDTO>> yearService(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearServiceDTO> yearServiceDTOList = null;
        try{
            yearServiceDTOList = stage2Service.getYearService();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->yearService失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearServiceDTOList);
        return circleDTO;
    }

    @ApiOperation(value="年度-放款额", notes="年度-放款额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/yearContract", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearContractDTO>> yearContract(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearContractDTO> yearContractDTOList = null;
        try{
            yearContractDTOList = stage2Service.getContractService();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->contractService失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearContractDTOList);
        return circleDTO;
    }

    @ApiOperation(value="年度-收佣额", notes="年度-收佣额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/yearCommission", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearCommissionDTO>> yearCommission(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearCommissionDTO> yearCommissionDTOS = null;
        try{
            yearCommissionDTOS = stage2Service.getCommissionService();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->commissionService失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearCommissionDTOS);
        return circleDTO;
    }

    @ApiOperation(value="季度-签订协议数", notes="季度-签订协议数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/seasonService", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearServiceDTO>> seasonService(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearServiceDTO> yearServiceDTOList = null;
        try{
            yearServiceDTOList = stage2Service.getSeasonService();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->seasonService失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearServiceDTOList);
        return circleDTO;
    }

    @ApiOperation(value="季度-放款额", notes="季度-放款额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/seasonContract", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearContractDTO>> seasonContract(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearContractDTO> yearContractDTOList = null;
        try{
            yearContractDTOList = stage2Service.getSeasonContract();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->seasonContract失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearContractDTOList);
        return circleDTO;
    }

    @ApiOperation(value="季度-收佣额", notes="季度-收佣额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/seasonCommission", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearCommissionDTO>> seasonCommission(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearCommissionDTO> yearCommissionDTOS = null;
        try{
            yearCommissionDTOS = stage2Service.getSeasonCommission();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->seasonCommission失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearCommissionDTOS);
        return circleDTO;
    }


    @ApiOperation(value="月度-签订协议数", notes="月度-签订协议数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/monthService", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearServiceDTO>> monthService(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearServiceDTO> yearServiceDTOList = null;
        try{
            yearServiceDTOList = stage2Service.getMonthService();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->monthService失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearServiceDTOList);
        return circleDTO;
    }

    @ApiOperation(value="月度-放款额", notes="月度-放款额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/monthContract", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearContractDTO>> monthContract(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearContractDTO> yearContractDTOList = null;
        try{
            yearContractDTOList = stage2Service.getMonthContract();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->monthContract失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearContractDTOList);
        return circleDTO;
    }

    @ApiOperation(value="月度-收佣额", notes="月度-收佣额")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/monthCommission", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<YearCommissionDTO>> monthCommission(){
        CircleDTO circleDTO = new CircleDTO();
        List<YearCommissionDTO> yearCommissionDTOS = null;
        try{
            yearCommissionDTOS = stage2Service.getMonthCommission();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->monthCommission失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(yearCommissionDTOS);
        return circleDTO;
    }
}
