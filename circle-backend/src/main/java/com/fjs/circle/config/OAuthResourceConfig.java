package com.fjs.circle.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;
import org.springframework.web.cors.CorsUtils;

/**
 * Created by bianxj on 2017/4/27.
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class OAuthResourceConfig extends ResourceServerConfigurerAdapter {
    @Value("${security.oauth2.client.client-id}")
    private String clientId;
    @Value("${security.oauth2.client.client-secret}")
    private String clientSecret;
    @Value("${security.oauth2.resource.id}")
    private String resourceId;
    @Value("${security.oauth2.resource.token-info-uri}")
    private String checkTokenUri;

    @Bean
    public RemoteTokenServices remoteTokenServices() {
        RemoteTokenServices remoteTokenServices = new RemoteTokenServices();
        remoteTokenServices.setClientId(clientId);
        remoteTokenServices.setClientSecret(clientSecret);
        remoteTokenServices.setCheckTokenEndpointUrl(checkTokenUri);
        return remoteTokenServices;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().requestMatchers(CorsUtils::isPreFlightRequest).permitAll().
//                antMatchers(
//                        "/serviceContract/v1/getBorrowerByReceivableId/**",
//                        "/receivables/v1/getPayByReceivableId/**",
//                        "/loan/v1/insertLoan/**",
//                        "/config/v1/special/name/**",
//                        "/loan/v1/cancelLoanByCustomerId/**",
//                        "/loan/v1/changeStatusByCustomerId/**",
//                        "/mail/v1/sendMail/**",
//                        "/mail/v1/insertCleanMailBatch/**",
//                        "/serviceContract/v1/serviceContract/cronus/toUser/**",
//                        "/loan/v1/cancelAll/**",
//                        "/config/v1/findByName/**").access("#oauth2.hasScope('thea')").
        antMatchers("/achievement/v1/updatePayStatus/**",
        "/serviceContract/v1/getBorrowerByAchievementId/**",
        "/achievement/v1/getPayByAchievementId/**",
        "/tempAchievement/v1/updateTempAchievement").access("#oauth2.hasScope('thea')").
                antMatchers("/swagger*/**", "/v2/api-docs/**", "/config/v1/name/**").permitAll().
                antMatchers("/**").access("#oauth2.hasScope('app')");

        // http.authorizeRequests().antMatchers("/app").authenticated();
        //http.addFilterBefore( new PreAuthFilter(), BasicAuthenticationFilter )
       /* http
                .authorizeRequests()
                .antMatchers("/user/blueprints").access("#oauth2.hasScope('cloudbreak.blueprints')")
                .antMatchers("/user/templates").access("#oauth2.hasScope('cloudbreak.templates')");*/
    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId(resourceId);
        resources.tokenServices(remoteTokenServices());
    }
}