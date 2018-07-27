package com.fjs.circle.controller.stage2;

import com.fjs.circle.dto.common.CircleDTO;
import com.fjs.circle.dto.common.CommonMessage;
import com.fjs.circle.dto.stage2.Model2DTO;
import com.fjs.circle.dto.stage2.TotalDTO;
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
@Api(description = "阶段2模块二控制器")
@RequestMapping("/stage2/v1/two")
public class ModelTwoController {
    private  static  final Logger logger = LoggerFactory.getLogger(ModelTwoController.class);

    @Autowired
    private Stage2Service stage2Service;

    @ApiOperation(value="模块二", notes="模块二")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "Authorization", value = "认证信息", required = true, paramType = "header", defaultValue = "Bearer 467405f6-331c-4914-beb7-42027bf09a01", dataType = "string")})
    @RequestMapping(value = "/two", method = RequestMethod.GET)
    @ResponseBody
    public CircleDTO<List<Model2DTO>> two(){
        CircleDTO circleDTO = new CircleDTO();
        List<Model2DTO> model2DTOList = null;
        try{
            model2DTOList = stage2Service.getModel2();
            circleDTO.setResult(CommonMessage.SUCCESS.getCode());
            circleDTO.setMessage(CommonMessage.SUCCESS.getCodeDesc());
        }catch (Exception e){
            logger.error("-------------->two()失败",e);
            circleDTO.setResult(CommonMessage.FAIL.getCode());
            circleDTO.setMessage(CommonMessage.FAIL.getCodeDesc());
        }
        circleDTO.setData(model2DTOList);
        return circleDTO;
    }
}
