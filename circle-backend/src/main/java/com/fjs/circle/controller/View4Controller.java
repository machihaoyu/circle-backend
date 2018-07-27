package com.fjs.circle.controller;

import com.fjs.circle.dto.DTO3;
import com.fjs.circle.dto.DTO4;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.View3Service;
import com.fjs.circle.service.View4Service;
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
 * Created by yinzf on 2018/7/19.
 */
@Controller
public class View4Controller {

    private  static  final Logger logger = LoggerFactory.getLogger(View3Controller.class);

    @Autowired
    private View4Service view4Service;

    @ApiOperation(value="公司总基础数据 - 分城市", notes="公司总基础数据 - 分城市")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectAllCity", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO4>> selectAllCity(){
        CircleDTO circleDTO = new CircleDTO();
        List<DTO4> dto4List = null;
        try{
            dto4List = view4Service.selectAllCity();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectFour查询视图4失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto4List);
        return circleDTO;
    }

    @ApiOperation(value="公司总基础数据 - 总计", notes="公司总基础数据 - 总计")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectCity", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO4>> selectCity(){
        CircleDTO circleDTO = new CircleDTO();
        List<DTO4> dto4List = null;
        try{
            dto4List = view4Service.selectCity();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectCity查询视图4失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto4List);
        return circleDTO;
    }
}
