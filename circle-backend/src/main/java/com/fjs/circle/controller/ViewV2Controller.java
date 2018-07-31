package com.fjs.circle.controller;

import com.fjs.circle.dto.CityDTO;
import com.fjs.circle.dto.DTO4;
import com.fjs.circle.dto.DTO5V2;
import com.fjs.circle.dto.NotCityDTO;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.ViewV2Service;
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
 * Created by gf on 2018/7/31.
 */
@Controller
@Api(description = "180730版本控制器")
public class ViewV2Controller {
    private static final Logger logger = LoggerFactory.getLogger(ViewV2Controller.class);

    @Autowired
    private ViewV2Service viewV2Service;

    @ApiOperation(value="模块五二版-180730", notes="模块五二版-180730")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/queryV2Trend", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO5V2>> queryV2Trend(){
        CircleDTO<List<DTO5V2>> circleDTO = new CircleDTO<>();
        List<DTO5V2> dto5V2s = null;
        try{
            dto5V2s = viewV2Service.selectDTO5V2();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectFour查询模块五二版失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto5V2s);
        return circleDTO;
    }


    @ApiOperation(value="模块4(实时) -- 不分城市", notes="模块4(实时) -- 不分城市")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/queryNotCity", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<NotCityDTO>> queryNotCity(){
        CircleDTO<List<NotCityDTO>> circleDTO = new CircleDTO<>();
        List<NotCityDTO> notCityDTOS = null;
        try{
            notCityDTOS = viewV2Service.selectNOTCity();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectFour查询模块4(实时) -- 不分城市失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(notCityDTOS);
        return circleDTO;
    }

    @ApiOperation(value="模块4(实时) -- 区分城市", notes="模块4(实时) -- 区分城市")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/queryCity", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<CityDTO>> queryCity(){
        CircleDTO<List<CityDTO>> circleDTO = new CircleDTO<>();
        List<CityDTO> cityDTOS = null;
        try{
            cityDTOS = viewV2Service.selectONCity();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectFour查询模块4(实时) -- 区分城市失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(cityDTOS);
        return circleDTO;
    }
}
