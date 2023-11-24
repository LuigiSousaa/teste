package com.example.app;

import java.sql.*;
import java.util.ArrayList;


public class CarrosDAO {
    public void create(Carros c) {
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO carros(marca,modelo,ano,cor,valor)VALUES(?,?,?,?,?)");
            stmt.setString(1, c.getMarca());
            stmt.setString(2, c.getModelo());
            stmt.setString(3, c.getAno());
            stmt.setString(4, c.getCor());
            stmt.setString(5, c.getValor());
            stmt.executeUpdate();
            // JOptionPane.showMessageDialog(null, "Salvo com sucesso!");
        } catch (SQLException ex) {
            System.out.println(ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }

    public ArrayList<Carros> read() { // Colocar na tabela
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Carros> listaCarros = new ArrayList<>();
        try {
            stmt = con.prepareStatement("SELECT * FROM carros");
            rs = stmt.executeQuery();
            while (rs.next()) {
                Carros carro = new Carros();
                carro.setId(rs.getInt("id"));
                carro.setMarca(rs.getString("marca"));
                carro.setModelo(rs.getString("modelo"));
                carro.setAno(rs.getString("ano"));
                carro.setCor(rs.getString("cor"));
                carro.setValor(rs.getString("valor"));
                listaCarros.add(carro);
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt, rs);
        }
        return listaCarros;
    }

    public ArrayList<Carros> readForMarca(String marca) {
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        ArrayList<Carros> listaCarros = new ArrayList<>();
        try {
            stmt = con.prepareStatement("SELECT * FROM carros WHERE marca LIKE ?");
            stmt.setString(1, "%" + marca + "%");
            rs = stmt.executeQuery();
            while (rs.next()) {
                Carros carro = new Carros();
                carro.setMarca(rs.getString("marca"));
                carro.setModelo(rs.getString("modelo"));
                carro.setAno(rs.getString("ano"));
                carro.setCor(rs.getString("cor"));
                carro.setValor(rs.getString("valor"));
                listaCarros.add(carro);
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt, rs);
        }
        return listaCarros;
    }

    public void update(Carros c) {
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE carros SET marca = ? ,modelo = ?,ano = ?,cor = ?,valor = ? WHERE id = ?");
            stmt.setString(1, c.getMarca());
            stmt.setString(2, c.getModelo());
            stmt.setString(3, c.getAno());
            stmt.setString(4, c.getCor());
            stmt.setString(5, c.getValor());
            stmt.setInt(6, c.getId());
            stmt.executeUpdate();
            // JOptionPane.showMessageDialog(null, "Atualizado com sucesso!");
        } catch (SQLException ex) {
            // JOptionPane.showMessageDialog(null, "Erro ao atualizar: " + ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }

    public void delete(Carros c) {
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("DELETE FROM carros WHERE id = ?");
            stmt.setInt(1, c.getId());
            stmt.executeUpdate();
            // JOptionPane.showMessageDialog(null, "Excluido com sucesso!");
        } catch (SQLException ex) {
            // JOptionPane.showMessageDialog(null, "Erro ao excluir: " + ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
}
