package com.fjs.circle.controller;

import com.fjs.circle.dto.DTO2;
import com.fjs.circle.dto.DappOperateCityDDTO;
import com.fjs.circle.dto.DappOperateCityDDTO2;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.DappOperateCityDService;
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
 * Created by yinzf on 2018/7/9.
 */
@Controller
@Api(description = "视图1控制器")
@RequestMapping("/DappOperateCityD/v1")
public class DappOperateCityDController {
    private  static  final Logger logger = LoggerFactory.getLogger(DappOperateCityDController.class);

    @Autowired
    private DappOperateCityDService dappOperateCityDService;

    @ApiOperation(value="视图1", notes="视图1")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectOne", method = RequestMethod.POST)
    @ResponseBody
    public CircleDTO<List<DappOperateCityDDTO>> selectOne(){
        CircleDTO circleDTO = new CircleDTO();
        List<DappOperateCityDDTO> dappOperateCityDDTOList = null;
        try{
            dappOperateCityDDTOList = dappOperateCityDService.selectOne();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectOne查询视图1失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dappOperateCityDDTOList);
        return circleDTO;
    }

    @ApiOperation(value="视图X", notes="视图X")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectX", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO2>> selectX(){
        CircleDTO circleDTO = new CircleDTO();
        List<DTO2> dto2List = null;
        try{
            dto2List = dappOperateCityDService.selectTwo();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectTwo查询视图2失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto2List);
        return circleDTO;
    }

    @ApiOperation(value="视图2", notes="视图2")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectTwo", method = RequestMethod.POST)
    @ResponseBody
    public CircleDTO<List<DappOperateCityDDTO2>> selectTwo(){
        CircleDTO circleDTO = new CircleDTO();
        List<DappOperateCityDDTO2> dappOperateCityDDTOList = null;
        try{
            dappOperateCityDDTOList = dappOperateCityDService.selectYear();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectTwo查询视图2失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dappOperateCityDDTOList);
        return circleDTO;
    }
}
