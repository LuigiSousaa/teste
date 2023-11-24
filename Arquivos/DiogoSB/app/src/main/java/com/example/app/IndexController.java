package com.example.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView abrirIndex() {
        ModelAndView mv = new ModelAndView("index");

        String mensagem = "Cadastro de Funcionários";
        mv.addObject("msg", mensagem);

        return mv;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ModelAndView buscarIndex(
        @RequestParam("funcionarioNome")String nome,
        @RequestParam("funcionarioEmail")String email ) {
        ModelAndView mv = new ModelAndView("index");

        String mensagem = "Funcionário Cadastrado";
        mv.addObject("msg", mensagem);
        mv.addObject("funcionarioNome", nome);
        mv.addObject("funcionarioEmail", email);

        return mv;
    }

}
