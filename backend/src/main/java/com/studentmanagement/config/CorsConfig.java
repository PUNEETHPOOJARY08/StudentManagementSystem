package com.studentmanagement.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

@Configuration
public class CorsConfig {

    @Value("${spring.web.cors.allowed-origins:http://localhost:3000}")
    private String allowedOrigins;

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // Allow credentials
        config.setAllowCredentials(true);
        
        // Parse allowed origins (comma-separated)
        List<String> origins = Arrays.asList(allowedOrigins.split(","));
        config.setAllowedOrigins(origins);
        
        // Allow all headers
        config.addAllowedHeader("*");
        
        // Allow all methods
        config.addAllowedMethod("*");
        
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
