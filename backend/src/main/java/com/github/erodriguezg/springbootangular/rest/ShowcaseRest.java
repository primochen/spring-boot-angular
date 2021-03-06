package com.github.erodriguezg.springbootangular.rest;

import com.github.erodriguezg.springbootangular.services.exceptions.LogicaNegocioException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/showcase")
public class ShowcaseRest {

    private static final Logger log = LoggerFactory.getLogger(ShowcaseRest.class);

    @GetMapping("/error-negocio")
    public void lanzarErrorNegocio() {
        log.debug("--> lanzando error de negocio");
        throw new LogicaNegocioException("您好，我是流程中的受控例外！");
    }

    @GetMapping("/error-interno")
    public void lanzarErrorInterno() {
        log.debug("--> lanzando error interno");
        throw new IllegalStateException("嗨，我是個Bug蟲子！");
    }

    @GetMapping("/accion-admin")
    @PreAuthorize("hasAnyAuthority('Administrador')")
    public void accionAdministrador() {
        log.debug("--> si llegue aquí es porque tengo permiso de Administrador!");
    }

    @GetMapping("/sleep")
    public void sleep() {
        log.debug("-> comenzando (5 seg) zzZZzzzZzzzZZzzz");
        try {
            Thread.sleep((long) 1000 * 5);
            log.debug("-> Despertando!");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IllegalStateException("睡眠中發生錯誤", e);
        }
    }

}
