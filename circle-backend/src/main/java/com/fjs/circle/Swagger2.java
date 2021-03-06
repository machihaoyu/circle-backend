package com.fjs.circle;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Map;

@Configuration
@EnableSwagger2
public class Swagger2 {

    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.fjs.circle"))
                .paths(PathSelectors.any())
                .build();
    }

    //HTTP Status 200 状态码表示成功，其他表示异常; 业务异常状态码见 Response Messages
    private ApiInfo apiInfo() {
        Contact contact = new Contact(" IT技术中心 ", "http://www.fangjinsuo.com", "");
        ApiInfo apiInfo = new ApiInfo("Circle(接口) APIs",//大标题
                "" +
                        "【使用说明】：" +
                        "普通调用使用 try catch，" +
                        "ajax调用使用error回调函数。" +
                        "【业务异常返回值(JSON)】：" +
                        " status 业务异常状态码；" +
                        " error 标准异常信息；" +
                        " message 自定义异常信息；" +
                        " exception 异常类型；" +
                        " timestamp 时间戳。" +
                        "",//小标题
                "1.0",//版本
                "http://www.fangjinsuo.com",
                contact,//作者
                "房金所",//链接显示文字
                "http://www.fangjinsuo.com"//网站链接
        );
        return apiInfo;

    }

}
