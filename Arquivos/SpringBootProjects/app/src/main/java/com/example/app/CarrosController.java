package com.example.app;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CarrosController {

    ArrayList<Carros> listaCarros = new ArrayList<Carros>();

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ModelAndView abrirCarros() {
        ModelAndView mv = new ModelAndView("carros");

        String mensagem = "Cadastro de Veículos";
        mv.addObject("msg", mensagem);

        return mv;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ModelAndView criarCarros(
            @RequestParam("marca") String marca,
            @RequestParam("modelo") String modelo,
            @RequestParam("ano") String ano,
            @RequestParam("cor") String cor,
            @RequestParam("valor") String valor) {
        ModelAndView mv = new ModelAndView("carros");
        Carros c = new Carros(marca, modelo, ano, cor, valor);
        listaCarros.add(c);
        CarrosDAO dao = new CarrosDAO();
        dao.create(c);

        String mensagem = "Cadastro Realizado com Sucesso";
        mv.addObject("msg", mensagem);
        // mv.addObject("buscar", buscar);

        return mv;
    }

}
