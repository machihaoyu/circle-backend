package com.fjs.circle.controller;

import com.fjs.circle.dto.*;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.TopService;
import com.fjs.circle.service.View5Service;
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
 * Created by yinzf on 2018/7/20.
 */
@Controller
@Api(description = "top控制器")
@RequestMapping("/top/v1")
public class TopController {
    private  static  final Logger logger = LoggerFactory.getLogger(TopController.class);

    @Autowired
    private TopService topService;

    @ApiOperation(value="月度版-业务员主题-签订协议数", notes="月度版-业务员主题-签订协议数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/top10", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Top10DTO>> top10(){
        CircleDTO circleDTO = new CircleDTO();
        List<Top10DTO> top10DTOList = null;
        try{
            top10DTOList = topService.getTop10();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->top10查询视图失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(top10DTOList);
        return circleDTO;
    }

    @ApiOperation(value="周版-业务员主题-面见客户数", notes="周版-业务员主题-面见客户数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/top16", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Top16DTO>> top16(){
        CircleDTO circleDTO = new CircleDTO();
        List<Top16DTO> top16DTOList = null;
        try{
            top16DTOList = topService.getTop16();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->top16查询视图失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(top16DTOList);
        return circleDTO;
    }

    @ApiOperation(value="日版-业务员主题-沟通客户数", notes="日版-业务员主题-沟通客户数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/top22", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Top22DTO>> top22(){
        CircleDTO circleDTO = new CircleDTO();
        List<Top22DTO> top22DTOList = null;
        try{
            top22DTOList = topService.getTop22();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->top22查询视图失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(top22DTOList);
        return circleDTO;
    }

    @ApiOperation(value="季度版-业务员主题-收佣数", notes="季度版-业务员主题-收佣数")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/top5", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Top5DTO>> top5(){
        CircleDTO circleDTO = new CircleDTO();
        List<Top5DTO> top5DTOList = null;
        try{
            top5DTOList = topService.getTop5();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->top5查询视图失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(top5DTOList);
        return circleDTO;
    }
}
