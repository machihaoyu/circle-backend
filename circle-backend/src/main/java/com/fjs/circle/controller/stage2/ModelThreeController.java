package com.fjs.circle.controller.stage2;

import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.dto.stage2.Model2DTO;
import com.fjs.circle.dto.stage2.Model3CakeDTO;
import com.fjs.circle.dto.stage2.Model3HistogramDTO;
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
 * Created by yinzf on 2018/7/26.
 */
@Controller
@Api(description = "阶段2模块三控制器")
@RequestMapping("/stage2/v1/three")
public class ModelThreeController {
    private  static  final Logger logger = LoggerFactory.getLogger(ModelThreeController.class);

    @Autowired
    private Stage2Service stage2Service;

    @ApiOperation(value="模块三饼图", notes="模块三饼图")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/cake", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Model3CakeDTO>> cake(){
        CircleDTO circleDTO = new CircleDTO();
        List<Model3CakeDTO> model3CakeDTOList = null;
        try{
            model3CakeDTOList = stage2Service.getModel3Cake();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->cake()失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(model3CakeDTOList);
        return circleDTO;
    }

    @ApiOperation(value="模块三柱状图", notes="模块三柱状图")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/histogram", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Model3HistogramDTO>> histogram(){
        CircleDTO circleDTO = new CircleDTO();
        List<Model3HistogramDTO> model3HistogramDTOList = null;
        try{
            model3HistogramDTOList = stage2Service.getHistogram();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->histogram()失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(model3HistogramDTOList);
        return circleDTO;
    }
}
