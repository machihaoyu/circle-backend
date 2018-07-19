package com.fjs.circle.controller;

import com.fjs.circle.dto.DTO3;
import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.service.View3Service;
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
 * Created by yinzf on 2018/7/16.
 */
@Controller
@Api(description = "视图3控制器")
@RequestMapping("/view3/v1")
public class View3Controller {
    private  static  final Logger logger = LoggerFactory.getLogger(View3Controller.class);

    @Autowired
    private View3Service view3Service;

    @ApiOperation(value="极坐标展示数据", notes="极坐标展示数据")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/selectThree", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<DTO3>> selectThree(){
        CircleDTO circleDTO = new CircleDTO();
        List<DTO3> dto3List = null;
        try{
            dto3List = view3Service.selectView3();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->selectThree查询视图3失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(dto3List);
        return circleDTO;
    }
}
