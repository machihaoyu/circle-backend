package com.fjs.circle.controller;

import com.fjs.circle.dto.DTO4;
import com.fjs.circle.dto.DTO5;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.View4Service;
import com.fjs.circle.service.View5Service;
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
public class View5Controller {
    private  static  final Logger logger = LoggerFactory.getLogger(View5Controller.class);

    @Autowired
    private View5Service view5Service;

    @ApiOperation(value="公司基础数据历史走势", notes="公司基础数据历史走势")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/getTrend", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO5>> getTrend(){
        CircleDTO circleDTO = new CircleDTO();
        List<DTO5> dto5List = null;
        try{
            dto5List = view5Service.getTrend();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectFive查询视图4失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto5List);
        return circleDTO;
    }
}
